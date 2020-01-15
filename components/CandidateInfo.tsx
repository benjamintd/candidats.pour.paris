import React from "react";
import candidatesInfo from "./candidatesInfo";

export default ({ candidate }: { candidate: ICandidat }) => {
  const info = candidatesInfo[candidate];
  return (
    <div
      className="pa3 mb3 white br3 br--top flex space-between"
      style={{ backgroundColor: info.color }}
    >
      <div>
        <h1 className="f2 fw3 di">{candidate}</h1>
        <h2 className="f4 white-80">
          <em>{info.movement}</em> · {info.party}
        </h2>
        <a className="white-80" href={info.website}>
          {info.website}
        </a>
      </div>
      <div className="w4-l h4-l w3 h3 ml-auto">
        <img className="br-100 ba bw2 b--light-gray" src={info.image} />
      </div>

      <style jsx>{`
        h1 {
          font-family: "Bree Serif", serif;
        }
      `}</style>
    </div>
  );
};
