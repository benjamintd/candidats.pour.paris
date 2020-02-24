import React from "react";
import Link from "next/link";
import candidatesInfo from "./candidatesInfo";
import { setSaturation, darken, desaturate, setLightness } from "polished";

export default ({ candidate }: { candidate: ICandidat }) => {
  const info = candidatesInfo[candidate];
  return (
    <div
      className="relative pa3 pr5-l pr4-m mb5 white br2 br--top flex items-center space-between"
      style={{
        borderTop: `4px solid ${info.color}`,
        backgroundColor: setSaturation(0.4, setLightness(0.9, info.color))
      }}
    >
      <div className="w4-l h4-l w3 h3 ml3 mr5 nb5 flex justify-center">
        <img
          className="w-100 h-100 br-100 ba bw2 b--light-gray"
          src={info.image}
          alt={candidate}
        />
      </div>
      <div className="w-75" style={{ color: desaturate(0.2, info.color) }}>
        <Link
          href="/candidats/[candidat]"
          as={"/candidats/" + encodeURI(candidate)}
        >
          <h1
            className="f2 fw3 di pointer link underline-hover"
            style={{ color: darken(0.2, info.color) }}
          >
            {candidate}
          </h1>
        </Link>
        <div className="f4 pt2">
          <em>{info.movement}</em> · {info.party} ·{" "}
          <a style={{ color: desaturate(0.2, info.color) }} href={info.website}>
            {info.website}
          </a>
        </div>
      </div>

      <style jsx>{`
        h1 {
          font-family: "Bree Serif", serif;
        }
      `}</style>
    </div>
  );
};
