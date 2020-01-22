import React, { useState } from "react";
import ReactGA from "react-ga";
import { flatten } from "lodash";

export default ({
  theme,
  question,
  onNext,
  onPrevious,
  step,
  totalSteps
}: {
  theme: string;
  question: IQuestion;
  onNext: (result: ICandidat[]) => void;
  onPrevious: () => void;
  step: number;
  totalSteps: number;
}) => {
  const [selected, setSelected] = useState([] as string[]);

  const next = () => {
    onNext(flatten(selected.map(s => question[s])));
    selected.forEach(s =>
      ReactGA.event({
        category: "QuizAnswer",
        action: s
      })
    );
    setSelected([]);
  };

  return (
    <div className="pa4">
      <p className="f3-l f4">
        Parmi ces propositions, lesquelles résonnent le plus avec vos
        convictions politiques ?
      </p>
      <p className="f5">
        Vous pouvez sélectionner une ou plusieurs réponses, ou passer la
        question si aucune ne vous inspire.
      </p>
      <div className="mv2 pa2 br2">
        <p className="ttu tracked gray fw4 f6 ma2">{theme}</p>
        {Object.keys(question).map(prop => (
          <div
            className={
              "br2 ba bw1 b--white pa2 pointer ma2 " +
              (selected.indexOf(prop) > -1 ? "selected" : "selectable")
            }
            onClick={() => {
              if (selected.indexOf(prop) === -1) {
                setSelected([...selected, prop]);
              } else {
                setSelected(selected.filter(s => s !== prop));
              }
            }}
            key={prop}
          >
            {prop}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button className="w4 h2 f6" onClick={onPrevious}>
          Précédent
        </button>
        <div className="gray">
          question {step}/{totalSteps}
        </div>
        <button className="w4 h2 f6" onClick={() => next()}>
          {selected ? "Suivant" : "Passer"}
        </button>
      </div>
      <style jsx>{`
        .selected {
          background-color: var(--light-yellow);
          border-color: orange;
        }

        .selectable {
          background-color: #eee;
        }

        .selectable:hover {
          background-color: white;
          border-color: grey;
        }
      `}</style>
    </div>
  );
};
