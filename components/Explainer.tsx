import React from "react";
import Link from "next/link";
import Button from "./Button";

export default () => (
  <div className="explainer w-100 f4-l f5 pa4 mb3 dark-gray">
    <div className="mw8 center">
      <p className="tagline f3-l f4 b">
        Ce site regroupe toutes les propositions <strong>concrètes</strong> et{" "}
        <strong>sourcées</strong> faites par les candidat·e·s à la mairie de
        Paris.
      </p>
      <div className="flex flex-row-l flex-col">
        <div>
          <p>📝 Les données sont ouvertes et participatives</p>

          <a
            className="pointer underline dark-gray ttu tracked"
            href="https://docs.google.com/spreadsheets/d/12bldIbAg95LyJ27keQ0w34lkFrsDnsYQpYb_GVSQgZ8/edit#gid=1627598762"
          >
            <Button onClick={() => {}}>contribuer</Button>
          </a>
        </div>
        <div>
          <p>🧐 Trouvez quel candidat vous correspond le mieux</p>

          <a className="pointer underline dark-gray ttu tracked" href="/quiz">
            <Button onClick={() => {}}>faites le quiz</Button>
          </a>
        </div>
        <div>
          <p>📊 Les tendances sont mises à jour quotidiennement</p>

          <a className="pointer underline dark-gray ttu tracked" href="/trends">
            <Button onClick={() => {}}>explorez</Button>
          </a>
        </div>
      </div>
    </div>

    <style jsx>{`
      .explainer {
        background-color: var(--light-blue);
        border-bottom: 1px solid var(--blue-300);
      }

      strong {
        display: inline-block;
        position: relative;
      }

      strong:after {
        content: "";
        position: absolute;
        width: 100%;
        display: block;
        height: 10px;
        background-color: var(--light-yellow);
        bottom: -3px;
        z-index: -1;
      }

      .tagline {
        color: var(--dark-blue);
      }
    `}</style>
  </div>
);
