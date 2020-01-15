import React from "react";

export default ({
  filter,
  setFilter
}: {
  filter: IFilter;
  setFilter: (f: IFilter) => void;
}) => {
  return (
    <div className="pa3 br3 mb2 mw8 center dark-gray">
      Afficher par{" "}
      <span
        className={
          "br3 pv1 ph2 shadow-3 pointer" +
          (filter === "candidate" ? " fw9 highlight" : "")
        }
        onClick={() => setFilter("candidate")}
      >
        candidat
      </span>{" "}
      <span
        className={
          "br3 pv1 ph2 shadow-3 pointer" +
          (filter === "type" ? " fw9 highlight" : "")
        }
        onClick={() => setFilter("type")}
      >
        thème
      </span>
      <style jsx>{`
        .highlight {
          background-color: var(--light-yellow);
        }
      `}</style>
    </div>
  );
};
