import React from "react";

import ListItem from "./ListItem";

interface IProps {
  proposals: {
    [type: string]: IProposition[];
  };
  type: string;
}

export default ({ proposals, type }: IProps) => {
  return (
    <div className="br3 pa3 bg-light-gray mb4 mw8 center shadow-3">
      <h1 className="f3 tc">{type}</h1>
      {Object.keys(proposals)
        .sort((a, b) => a.localeCompare(b))
        .map(candidate => {
          return (
            <div key={candidate} className="flex-l flex-column-m pb2">
              <div className="w-25-l w-100-m mv2 f4">{candidate}</div>
              <ul className="mv2 w-75-l w-100-m lh-copy">
                {proposals[candidate].map(proposal => (
                  <ListItem source={proposal.source}>{proposal.text}</ListItem>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
};
