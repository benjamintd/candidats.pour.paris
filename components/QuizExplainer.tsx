import React from "react";

export default ({ onContinue }: { onContinue: () => void }) => (
  <div className="pa4 tc">
    <p className="f3-l f4">
      Comparez les propositions concrètes faites par les candidats à la mairie
      de Paris.
    </p>
    <p className="f4-l f5">
      Vous pourrez voir à quel candidat vos convictions correspondent le mieux.
      Quoi qu'il en soit, n'oubliez pas de voter le 15 mars prochain !
    </p>
    <button onClick={onContinue}>Commencer</button>
  </div>
);
