import React from "react";
import Link from "next/link";
import candidatesInfo from "./candidatesInfo";
import { lighten } from "polished";

export default ({ candidate }: { candidate: ICandidat }) => {
  const info = candidatesInfo[candidate];
  return (
    <div
      className="pa3 pr5-l pr4-m mb3 white br3 br--top flex items-center space-between"
      style={{
        background: `linear-gradient(to right, ${info.color}, ${
          info.color
        }, ${lighten(0.1, info.color)})`
      }}
    >
      <div className="w-75">
        <Link
          href="/candidats/[candidat]"
          as={"/candidats/" + encodeURI(candidate)}
        >
          <h1 className="f2 fw3 di pointer link underline-hover">
            {candidate}
          </h1>
        </Link>
        <h2 className="f4 white-80">
          <em>{info.movement}</em> · {info.party}
        </h2>
        <a className="white-80" href={info.website}>
          {info.website}
        </a>
      </div>
      <div className="w4-l h4-l w3 h3 ml-auto flex items-center">
        <img
          className="br-100 ba bw2 b--light-gray"
          src={info.image}
          alt={candidate}
        />
      </div>

      <style jsx>{`
        h1 {
          font-family: "Bree Serif", serif;
        }
      `}</style>
    </div>
  );
};
