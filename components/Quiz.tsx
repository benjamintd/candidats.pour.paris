import React, { useState } from "react";
import { shuffle } from "lodash";
import QuizExplainer from "./QuizExplainer";
import Question from "./Question";
import Results from "./Results";

export default ({ data }: { data: IQuiz }) => {
  const [step, setStep] = useState(-1);
  const [results, setResults] = useState([]);
  const questions = Object.keys(data);

  if (step <= -1) {
    return <QuizExplainer onContinue={() => setStep(0)} />;
  } else if (step < questions.length) {
    return (
      <Question
        step={step}
        totalSteps={questions.length - 1}
        question={data[questions[step]]}
        onNext={result => {
          if (result) {
            setResults([...results, result]);
          }
          setStep(step + 1);
        }}
        onPrevious={() => {
          setResults(results.slice(0, results.length - 1));
          setStep(step - 1);
        }}
      />
    );
  } else {
    return <Results results={results} />;
  }
};
