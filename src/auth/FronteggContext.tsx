import { FronteggStoreProvider } from "@frontegg/react-hooks";
import { FronteggApp } from "@frontegg/js";
import {
  ContextHolder,
  ContextOptions,
  createApiClient,
} from "@frontegg/rest-api";
import { useEffect } from "react";

const contextOptions: ContextOptions = {
  baseUrl: import.meta.env.VITE_PUBLIC_FRONTEGG_BASE_URL,
  clientId: import.meta.env.VITE_PUBLIC_FRONTEGG_CLIENT_ID,
  requestCredentials: "include",
};

const CONTEXT_NAME = "FronteggContext";

ContextHolder.for(CONTEXT_NAME).setContext(contextOptions);

const fronteggApp = new FronteggApp(
  {
    contextOptions,
    hostedLoginBox: true,
  },
  "default"
);

export function FronteggContext({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    createApiClient(CONTEXT_NAME)
      .auth.refreshTokenV3()
      .then((user) => {
        fronteggApp.store.dispatch({
          type: "auth/setState",
          payload: {
            isLoading: false,
            ...user,
            isAuthenticated: true,
          },
        });
      })
      .catch((e) => {
        console.error("failed to call silent refresh login", e);
        fronteggApp.store.dispatch({
          type: "auth/setState",
          payload: {
            isLoading: false,
            user: null,
            isAuthenticated: false,
          },
        });
      });
  }, []);

  return (
    <FronteggStoreProvider app={fronteggApp} contextOptions={contextOptions}>
      {children}
    </FronteggStoreProvider>
  );
}
