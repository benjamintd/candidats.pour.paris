import React from "react";
import Link from "next/link";

export default ({ filter }: { filter: IFilter }) => {
  return (
    <div className="pa3 mb2 dark-gray">
      Afficher par{" "}
      <Link href="/candidats">
        <span
          className={
            "br2 pv1 ph2 shadow-3 pointer dim" +
            (filter === "candidate" ? " fw9 highlight" : "")
          }
        >
          candidats
        </span>
      </Link>{" "}
      <Link href="/themes">
        <span
          className={
            "br2 pv1 ph2 shadow-3 pointer dim" +
            (filter === "type" ? " fw9 highlight" : "")
          }
        >
          thèmes
        </span>
      </Link>
      <style jsx>{`
        .highlight {
          background-color: var(--light-yellow);
        }
      `}</style>
    </div>
  );
};
