import { useState, useEffect } from "react";

const useProposals = (data: ISheetData): IQuiz => {
  const [quiz, setQuiz] = useState({});

  useEffect(
    () => {
      const quiz = {};
      data.records.forEach(rec => {
        if (!rec.SousType) {
          return;
        }
        // create the candidate * type if it does not exist
        if (!quiz[rec.SousType]) quiz[rec.SousType] = {};
        if (!quiz[rec.SousType][rec.Proposition])
          quiz[rec.SousType][rec.Proposition] = [];

        quiz[rec.SousType][rec.Proposition].push(rec.Candidat);
      });

      setQuiz(quiz);
    },
    // the proposals are updated depending on the spreadsheet query results
    [data]
  );
  return quiz;
};

export default useProposals;
