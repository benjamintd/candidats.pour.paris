import React from "react";

import Trends from "../components/Trends";

export default () => (
  <>
    <div className="w-100 tc f3-l f5 pa4">
      <p>
        Voici l'évolution des statistiques de recherche Google pour les
        principaux candidats à la mairie de Paris.
      </p>
      <p className="f4-l f5">
        Le module étant limité à 5 noms, nous n'avons pas pu ajouter l'ensemble
        des candidats. Cette mesure ne doit pas être utilisée comme un
        indicateur des intentions de vote ; il sert tout au plus à évaluer la
        place des candidats dans l'espace médiatique.
      </p>
    </div>
    <Trends />
  </>
);
