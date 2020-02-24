import React from "react";
import Link from "next/link";

import ListItem from "./ListItem";
import candidatesInfo from "./candidatesInfo";

interface IProps {
  proposals: {
    [type: string]: IProposition[];
  };
  type: string;
}

export default ({ proposals, type }: IProps) => {
  return (
    <div className="br2 bg-light-gray mb4 center shadow-3">
      <div className="bg-dark-blue pa2 f5 fw3 white tc br2 br--top">
        <Link href="/themes/[theme]" as={"/themes/" + encodeURI(type)}>
          <h1 className="pointer link underline-hover">{type}</h1>
        </Link>
      </div>
      <div className="pa3">
        {Object.keys(proposals)
          .sort((a, b) => a.localeCompare(b))
          .map(candidate => {
            return (
              <div key={candidate} className="flex-l flex-column-m pb2">
                <div className="w-25-l w-100-m">
                  <Link
                    href="/candidats/[candidat]"
                    as={"/candidats/" + encodeURI(candidate)}
                  >
                    <a className="mv2 f4 black link underline-hover">
                      {candidate}
                    </a>
                  </Link>
                </div>
                <ul className="mb2 w-75-l w-100-m lh-copy">
                  {proposals[candidate].map((proposal, i) => (
                    <ListItem key={i} source={proposal.source}>
                      {proposal.text}
                    </ListItem>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
      <style jsx>{`
        h1 {
          font-family: "Bree Serif", serif;
        }
      `}</style>
    </div>
  );
};
