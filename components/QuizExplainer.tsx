import React from "react";

export default ({ onContinue }: { onContinue: () => void }) => (
  <div className="pa4 tc">
    <p className="f4">
      Ce quiz vous propose de comparer les propositions concrètes faites par les
      candidats à la mairie de Paris.
    </p>
    <p className="f5">
      Vous pourrez voir à quel candidat vos propositions préférées se réfèrent
      et vous faire une idée de la liste pour qui voter le 15 mars prochain !
    </p>
    <button onClick={onContinue}>Continuer</button>
  </div>
);
