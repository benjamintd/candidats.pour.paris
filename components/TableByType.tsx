import React from "react";
import TypeProposals from "./TypeProposals";

export interface ITableProps {
  proposalsByType: {
    [type: string]: {
      [candidate: string]: IProposition[];
    };
  };
}

export default ({ proposalsByType }: ITableProps) => {
  return (
    <div className="w-100 flex-column items-center pa3">
      {Object.keys(proposalsByType)
        .sort((a, b) => a.localeCompare(b))
        .map(type => (
          <TypeProposals
            key={type}
            proposals={proposalsByType[type]}
            type={type}
          />
        ))}
    </div>
  );
};
