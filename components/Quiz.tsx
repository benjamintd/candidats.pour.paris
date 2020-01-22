import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import QuizExplainer from "./QuizExplainer";
import Question from "./Question";
import Results from "./Results";

export default ({ data }: { data: IQuiz }) => {
  const [step, setStep] = useState(-1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    ReactGA.event({
      category: "QuizPage",
      action: "Page",
      value: step
    });
  }, [step]);

  const onNext = result => {
    if (result) {
      setResults([...results, result]);
    }
    setStep(step + 1);
  };

  const onPrevious = () => {
    setResults(results.slice(0, results.length - 1));
    setStep(step - 1);
  };

  const questions = Object.keys(data);

  if (step <= -1) {
    return <QuizExplainer onContinue={() => setStep(0)} />;
  } else if (step < questions.length) {
    return (
      <Question
        step={step + 1}
        totalSteps={questions.length}
        theme={questions[step]}
        question={data[questions[step]]}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    );
  } else {
    return <Results results={results} />;
  }
};
