import React from "react";
import logo from "@assets/img/logo.svg";
import "@pages/newtab/Newtab.css";
import { FronteggContext } from "@src/auth/FronteggContext";

export default function Newtab() {
  return (
    <FronteggContext>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/pages/newtab/Newtab.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>
      </div>
    </FronteggContext>
  );
}
