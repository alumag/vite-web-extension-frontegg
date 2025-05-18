/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** The AppUrl is used to tell Frontegg your application hostname */
    readonly VITE_PUBLIC_APP_URL: string;
    /** The FronteggBaseUrl is used to tell Frontegg your application hostname */
    readonly VITE_PUBLIC_FRONTEGG_BASE_URL: string;
    /** The FronteggClientId is used to tell Frontegg your application hostname */
    readonly VITE_PUBLIC_FRONTEGG_CLIENT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  