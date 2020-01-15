import React from "react";
import GoogleSheets from "./GoogleSheets";

export default () => (
  <div className="w-100 tc f3-l f5 pa4">
    <p>
      Cette page vise à recenser toutes les propositions{" "}
      <strong>concrètes</strong> et <strong>sourcées</strong> faites par les
      candidat·e·s à la mairie de Paris.
    </p>
    <p>
      Vous pouvez y contribuer en remplissant le document suivant:{" "}
      <a
        className="v-mid dib"
        href="https://docs.google.com/spreadsheets/d/12bldIbAg95LyJ27keQ0w34lkFrsDnsYQpYb_GVSQgZ8/edit#gid=1627598762"
      >
        <GoogleSheets size="1.5em" />
      </a>
    </p>

    <style jsx>{`
      strong {
        background-color: var(--light-yellow);
        padding: 3px;
      }
    `}</style>
  </div>
);
