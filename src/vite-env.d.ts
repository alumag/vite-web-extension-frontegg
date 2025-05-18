/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_APP_URL: string;
    readonly VITE_PUBLIC_FRONTEGG_BASE_URL: string;
    readonly VITE_PUBLIC_FRONTEGG_CLIENT_ID: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  