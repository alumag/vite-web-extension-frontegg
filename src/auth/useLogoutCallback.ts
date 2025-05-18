import { useCallback } from "react";

const APP_URL = import.meta.env.VITE_PUBLIC_APP_URL;

export const useLogoutCallback = (callback: (tab: chrome.tabs.Tab) => void) => {
    return useCallback(() => {
        /**
         * Navigate to the logout page.
         *
         * @example
         * logoutCallback = useLogoutCallback((tab) => {
         *  window.close();
         * });
         */
        chrome.tabs.create({ url: `${APP_URL}/account/logout` }, callback);
  }, []);
};
