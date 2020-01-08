import React from "react";
import CandidateProposals from "./CandidateProposals";

export interface ITableProps {
  proposalsByCandidateAndType: {
    [candidate: string]: {
      [propType: string]: IProposition[];
    };
  };
}

export default ({ proposalsByCandidateAndType }: ITableProps) => {
  return (
    <div className="flex-column pa3">
      {Object.keys(proposalsByCandidateAndType)
        .sort((a, b) => a.localeCompare(b))
        .map(candidate => (
          <CandidateProposals
            key={candidate}
            proposalsByType={proposalsByCandidateAndType[candidate]}
            candidate={candidate}
          />
        ))}
    </div>
  );
};
