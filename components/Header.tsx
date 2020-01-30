import React from "react";
import Github from "./Github";
import Twitter from "./Twitter";
import Logo from "./Logo";

export default () => (
  <header>
    <div className="bg-near-white bb b--moon-gray shadow-4 w-100 ph4 pv2 flex flex-row-l flex-row-m flex-column items-center">
      <a href="/">
        <div className="w2 h2 mr3-l mr3-m logo">
          <Logo fill="#001B44" size={30} />
        </div>
      </a>
      <span className="logotype f1-l f1-m f2 mv2 navy">
        candidats.pour.paris
      </span>
      <div className="ml-auto-l ml-auto-m">
        <Github fill="#001B44" />
        <Twitter fill="#001B44" />
      </div>
    </div>
    <style jsx>{`
      header {
        font-family: "Bree Serif", serif;
      }
      .logo {
        margin-bottom: -0.7rem;
      }
    `}</style>
  </header>
);
