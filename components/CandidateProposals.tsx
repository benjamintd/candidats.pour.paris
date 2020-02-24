import React from "react";
import CandidateInfo from "./CandidateInfo";
import ListItem from "./ListItem";
import Link from "next/link";
import { darken } from "polished";

import candidatesInfo from "./candidatesInfo";

interface IProps {
  proposals: {
    [type: string]: IProposition[];
  };
  candidate: ICandidat;
}

export default ({ proposals, candidate }: IProps) => {
  return (
    <div className="br2 bg-white mb4 center shadow-3">
      <CandidateInfo candidate={candidate} />
      <div className="pa3">
        {Object.keys(proposals)
          .sort((a, b) => a.localeCompare(b))
          .map(type => {
            return (
              <div key={type} className="flex-l flex-column-m pb2">
                <div className="w-25-l w-100-m">
                  <Link
                    href="/themes/[theme]"
                    as={"/themes/" + encodeURI(type)}
                  >
                    <a
                      style={{
                        color: darken(0.2, candidatesInfo[candidate].color)
                      }}
                      className="mv2 f4 b link underline-hover"
                    >
                      {type}
                    </a>
                  </Link>
                </div>
                <ul className="mv2 w-75-l w-100-m lh-copy">
                  {proposals[type].map((proposal, i) => (
                    <ListItem key={i} source={proposal.source}>
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
