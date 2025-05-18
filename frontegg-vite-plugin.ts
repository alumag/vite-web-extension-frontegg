import fs from 'fs';
import path from 'path';
import type { PluginOption } from 'vite';

/**
 * Patch @frontegg/js to not inject GTM script in the head.
 * 
 * This is necessary because including remotely hosted code is a violation of the Chrome Web Store policy.
 */
export function patchFronteggJs(isDev: boolean): PluginOption {
  if (isDev) return null;

  return {
    name: "patch-frontegg-js",
    generateBundle: () => {}, // Empty to ensure plugin is included
    writeBundle: async (outputOptions) => {
        const outDir = outputOptions.dir;

        if (!outDir) {
            throw new Error("Output directory is not defined");
        }

        // remove Frontegg GTM from all js files
        const processFile = (filePath: string) => {
          const content = fs.readFileSync(filePath, "utf8");
          const newContent = content.toString().replace(
            // look at @frontegg/js/FronteggApp/utils.js
            /[a-zA-Z0-9_]*\.innerHTML\s*=\s*(?:(?:'[^']*https:\/\/www\.googletagmanager\.com\/gtm\.js[^']*')|(?:"[^"]*https:\/\/www\.googletagmanager\.com\/gtm\.js[^"]*")|(?:`[^`]*https:\/\/www\.googletagmanager\.com\/gtm\.js[^`]*`)).*?document\.body\.appendChild\([^)]*\)/gms,
            "",
          );
          fs.writeFileSync(filePath, newContent);
        };

        const processDirectory = (dir: string) => {
          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
              processDirectory(fullPath);
            } else if (entry.name.endsWith(".js")) {
              processFile(fullPath);
            }
          }
        };

        processDirectory(outDir);
      },
  }
}