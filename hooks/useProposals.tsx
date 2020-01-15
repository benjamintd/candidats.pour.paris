import { useState, useEffect } from "react";

const useProposals = (data: ISheetData): [IPropsHash, IPropsHash] => {
  const [proposalsByCandidate, setProposalsByCandidate] = useState({});

  const [proposalsByType, setProposalsByType] = useState({});

  useEffect(
    () => {
      const pbc = {};
      const pbt = {};
      data.records.forEach(rec => {
        // create the candidate * type if it does not exist
        if (!pbc[rec.Candidat]) pbc[rec.Candidat] = {};
        if (!pbc[rec.Candidat][rec.Type]) pbc[rec.Candidat][rec.Type] = [];
        // create the type * candidate if it does not exist
        if (!pbt[rec.Type]) pbt[rec.Type] = {};
        if (!pbt[rec.Type][rec.Candidat]) pbt[rec.Type][rec.Candidat] = [];

        const prop = {
          text: rec.Proposition,
          source: rec.Source
        };
        // fill the hashes
        pbc[rec.Candidat][rec.Type].push(prop);
        pbt[rec.Type][rec.Candidat].push(prop);
      });

      setProposalsByCandidate(pbc);
      setProposalsByType(pbt);
    },
    // the proposals are updated depending on the spreadsheet query results
    [data]
  );
  return [proposalsByCandidate, proposalsByType];
};

export default useProposals;
