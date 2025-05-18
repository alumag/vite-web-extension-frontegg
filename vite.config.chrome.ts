import { resolve } from 'path';
import { mergeConfig, defineConfig, loadEnv } from 'vite';
import { crx, ManifestV3Export } from '@crxjs/vite-plugin';
import baseConfig, { baseManifest, baseBuildOptions, getHostPermissions } from './vite.config.base'

const outDir = resolve(__dirname, 'dist_chrome');

export default defineConfig((env) =>
  mergeConfig(
    baseConfig,
    defineConfig({
      plugins: [
        crx({
          manifest: {
            ...baseManifest,
            ...getHostPermissions(loadEnv(env.mode, process.cwd(), '')),
            background: {
              service_worker: 'src/pages/background/index.ts',
              type: 'module'
            },
          } as ManifestV3Export,
          browser: 'chrome',
          contentScripts: {
            injectCss: true,
          }
        })
      ],
      build: {
        ...baseBuildOptions,
        outDir
      },
    })
  )
)
