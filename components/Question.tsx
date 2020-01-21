import React, { useState } from "react";
import useKeypress from "../hooks/useKeypress";

export default ({
  question,
  onNext,
  onPrevious,
  step,
  totalSteps
}: {
  question: IQuestion;
  onNext: (result: ICandidat[]) => void;
  onPrevious: () => void;
  step: number;
  totalSteps: number;
}) => {
  const [selected, setSelected] = useState("");
  const enterPress = useKeypress("enter");

  if (enterPress) {
    onNext(question[selected]);
  }

  return (
    <div>
      <p className="f3">
        Parmi ces propositions, laquelle résonne le plus avec vos convictions
        politiques ?
      </p>
      <div className="bg-near-white mv2 pa2 br2">
        {Object.keys(question).map(prop => (
          <div
            className={
              "br2 ba bw1 b--white pa2 pointer ma2 " +
              (selected === prop ? "selected" : "selectable")
            }
            onClick={() => setSelected(prop)}
            key={prop}
          >
            {prop}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={onPrevious}>Précédent</button>
        <div>
          question {step}/{totalSteps}
        </div>
        <button onClick={() => onNext(question[selected])}>Suivant</button>
      </div>
      <style jsx>{`
        .selected {
          background-color: var(--light-yellow);
          border-color: orange;
        }

        .selectable:hover {
          background-color: white;
          border-color: grey;
        }
      `}</style>
    </div>
  );
};
