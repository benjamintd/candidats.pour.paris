import React from "react";
import CandidateInfo from "./CandidateInfo";
import ListItem from "./ListItem";

interface IProps {
  proposals: {
    [type: string]: IProposition[];
  };
  candidate: ICandidat;
}

export default ({ proposals, candidate }: IProps) => {
  return (
    <div className="br3 bg-light-gray mb4 mw8 center shadow-3">
      <CandidateInfo candidate={candidate} />
      <div className="pa3">
        {Object.keys(proposals)
          .sort((a, b) => a.localeCompare(b))
          .map(type => {
            return (
              <div key={type} className="flex-l flex-column-m pb2">
                <div className="w-25-l w-100-m mv2 f4">{type}</div>
                <ul className="mv2 w-75-l w-100-m lh-copy">
                  {proposals[type].map(proposal => (
                    <ListItem source={proposal.source}>
                      {proposal.text}
                    </ListItem>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};
