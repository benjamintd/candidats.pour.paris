import React from "react";

import ListItem from "./ListItem";

interface IProps {
  proposals: {
    [type: string]: IProposition[];
  };
  candidate: string;
}

export default ({ proposals, candidate }: IProps) => {
  return (
    <div className="br3 pa3 bg-light-gray mb4 mw8 center shadow-3">
      <h1 className="f3 tc">{candidate}</h1>
      {Object.keys(proposals)
        .sort((a, b) => a.localeCompare(b))
        .map(type => {
          return (
            <div key={type} className="flex-l flex-column-m pb2">
              <div className="w-25-l w-100-m mv2 f4">{type}</div>
              <ul className="mv2 lh-copy">
                {proposals[type].map(proposal => (
                  <ListItem source={proposal.source}>{proposal.text}</ListItem>
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
};
