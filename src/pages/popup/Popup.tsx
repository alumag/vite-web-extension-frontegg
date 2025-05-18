import React from "react";
import logo from "@assets/img/logo.svg";
import { FronteggContext } from "@src/auth/FronteggContext";
import { UserInfo } from "@src/components/UserInfo";

export default function Popup() {
  return (
    <FronteggContext>
      <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full p-3 bg-gray-800">
        <header className="flex flex-col items-center justify-center text-white">
          <img
            src={logo}
            className="h-36 pointer-events-none animate-spin-slow"
            alt="logo"
          />
        </header>
        <UserInfo />
      </div>
    </FronteggContext>
  );
}
