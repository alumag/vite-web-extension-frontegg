import React from "react";
import "@pages/panel/Panel.css";
import { FronteggContext } from "@src/auth/FronteggContext";
import { UserInfo } from "@src/components/UserInfo";
export default function Panel() {
  return (
    <FronteggContext>
      <div className="container">
        <h1>Side Panel</h1>
        <UserInfo />
      </div>
    </FronteggContext>
  );
}
