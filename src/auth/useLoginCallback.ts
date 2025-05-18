import { useCallback } from "react";

const APP_URL = import.meta.env.VITE_PUBLIC_APP_URL;

export const useLoginCallback = (callback: (tab: chrome.tabs.Tab) => void) => {
    return useCallback(() => {
        /**
         * Navigate to the login page specifically, and not just for the app, to force new login.
         *
         * Sometimes when there's already a login session to the app, the chrome extension won't
         * use it.
         *
         * @example
         * loginCallback = useLoginCallback((tab) => {
         *  window.close();
         * });
         */
        chrome.tabs.create({ url: `${APP_URL}/account/login` }, callback);
  }, []);
};
