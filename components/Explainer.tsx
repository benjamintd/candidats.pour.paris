import React from "react";
import GoogleSheets from "./GoogleSheets";
import Link from "next/link";

export default () => (
  <div className="w-100 f4-l f5 pa4">
    <p className="f3-l f4 tc">
      Cette page vise à recenser toutes les propositions{" "}
      <strong>concrètes</strong> et <strong>sourcées</strong> faites par les
      candidat·e·s à la mairie de Paris.
    </p>
    <p>
      📝 Les données sont ouvertes, venez y{" "}
      <a
        className="pointer underline black"
        href="https://docs.google.com/spreadsheets/d/12bldIbAg95LyJ27keQ0w34lkFrsDnsYQpYb_GVSQgZ8/edit#gid=1627598762"
      >
        contribuer
      </a>
      .
    </p>
    <p>
      🧐 Faites le{" "}
      <Link href="/quiz">
        <a className="pointer underline black">quiz</a>
      </Link>{" "}
      pour trouver quel candidat vous correspond le mieux.
    </p>
    <p>
      📊 Explorez les{" "}
      <Link href="/trends">
        <a className="pointer underline black">tendances</a>
      </Link>{" "}
      mises à jour quotidiennement.
    </p>
    <style jsx>{`
      strong {
        background-color: var(--light-yellow);
        padding: 3px;
      }
    `}</style>
  </div>
);
