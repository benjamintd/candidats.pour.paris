import React from "react";
import fetch from "isomorphic-unfetch";
import dynamic from "next/dynamic";

import GoogleTrends from "../components/GoogleTrends";

const Hypermind = dynamic(() => import("../components/Hypermind"), {
  ssr: false
});

const TrendsPage = (props: { data: IHypermind }) => (
  <div className="mw8 center">
    <div className="w-100 tc f3-l f5 pa4">
      <p>
        Voici l'évolution des statistiques de recherche Google pour les
        principaux candidats à la mairie de Paris.
      </p>
      <p className="f4-l f5">
        Le module étant limité à 5 noms, nous n'avons ajouté que les candidats
        principaux. Cette mesure ne doit pas être utilisée comme un indicateur
        des intentions de vote ; il sert tout au plus à évaluer la place des
        candidats dans l'espace médiatique.
      </p>
    </div>
    <GoogleTrends />
    <div className="w-100 tc f3-l f5 pa4">
      <p>
        Ci-dessous, les prédictions d'
        <a
          href="https://predict.hypermind.com"
          className="blue link underline-hover"
        >
          hypermind
        </a>{" "}
        qui indiquent la probabilité de gagner de chacun des principaux
        candidats.
      </p>
      <p className="f4-l f5">
        Ces probabilités sont calculées sur le principe de marché prédictif,
        dont la méthodologie est expliquée{" "}
        <a
          href="https://predict.hypermind.com/hypermind/app.html?fwd=#research"
          className="blue link underline-hover"
        >
          ici
        </a>
        . Il s'agit des probabilités estimées de gagner et non de pourcentages
        d'intentions de vote.
      </p>
    </div>
    <Hypermind data={props.data} />
  </div>
);

TrendsPage.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/hypermind");
  const data = await res.json();
  return { data };
};

export default TrendsPage;
