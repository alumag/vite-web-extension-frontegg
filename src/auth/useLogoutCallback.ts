import { useCallback } from "react";
import Browser from "webextension-polyfill";

const APP_URL = import.meta.env.VITE_PUBLIC_APP_URL;

export const useLogoutCallback = (callback: (tab: Browser.Tabs.Tab) => void) => {
    return useCallback(() => {
        /**
         * Navigate to the logout page.
         *
         * @example
         * logoutCallback = useLogoutCallback((tab) => {
         *  window.close();
         * });
         */
        Browser.tabs.create({ url: `${APP_URL}/account/logout` }).then(callback).catch(console.error);
  }, []);
};
