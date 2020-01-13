import React from "react";
import CandidateProposals from "./CandidateProposals";

export interface ITableProps {
  proposalsByCandidate: {
    [candidate: string]: {
      [propType: string]: IProposition[];
    };
  };
}

export default ({ proposalsByCandidate }: ITableProps) => {
  return (
    <div className="w-100 flex-column items-center pa3">
      {Object.keys(proposalsByCandidate)
        .sort((a, b) => a.localeCompare(b))
        .map(candidate => (
          <CandidateProposals
            key={candidate}
            proposals={proposalsByCandidate[candidate]}
            candidate={candidate}
          />
        ))}
    </div>
  );
};
