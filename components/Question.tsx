import React, { useState } from "react";
import ReactGA from "react-ga";

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
  const [selected, setSelected] = useState("");

  const next = () => {
    onNext(question[selected]);
    ReactGA.event({
      category: "QuizAnswer",
      action: selected
    });
    setSelected("");
  };

  return (
    <div className="pa4">
      <p className="f3">
        Parmi ces propositions, laquelle résonne le plus avec vos convictions
        politiques ?
      </p>
      <div className="mv2 pa2 br2">
        <p className="ttu tracked gray fw4 f6 ma2">{theme}</p>
        {Object.keys(question).map(prop => (
          <div
            className={
              "br2 ba bw1 b--white pa2 pointer ma2 " +
              (selected === prop ? "selected" : "selectable")
            }
            onClick={() => {
              if (selected != prop) {
                setSelected(prop);
              } else {
                setSelected("");
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
