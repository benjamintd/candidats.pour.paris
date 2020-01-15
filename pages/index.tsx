import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Explainer from "../components/Explainer";
import Filter from "../components/Filter";
import TableByCandidate from "../components/TableByCandidate";
import TableByType from "../components/TableByType";
import fetch from "isomorphic-unfetch";

interface IProps {
  records: Array<{
    Proposition: string;
    Candidat: ICandidat;
    Type: IPropositionType;
    Source: string;
  }>;
}

const App = (props: IProps) => {
  const [proposalsByCandidate, setProposalsByCandidate] = useState({});

  const [proposalsByType, setProposalsByType] = useState({});

  const [filter, setFilter] = useState("candidate" as IFilter);

  useEffect(
    () => {
      const pbc = {};
      const pbt = {};
      props.records.forEach(rec => {
        // create the candidate * type if it does not exist
        if (!pbc[rec.Candidat]) pbc[rec.Candidat] = {};
        if (!pbc[rec.Candidat][rec.Type]) pbc[rec.Candidat][rec.Type] = [];
        // create the type * candidate if it does not exist
        if (!pbt[rec.Type]) pbt[rec.Type] = {};
        if (!pbt[rec.Type][rec.Candidat]) pbt[rec.Type][rec.Candidat] = [];

        const prop = {
          text: rec.Proposition,
          source: rec.Source
        };
        // fill the hashes
        pbc[rec.Candidat][rec.Type].push(prop);
        pbt[rec.Type][rec.Candidat].push(prop);
      });

      setProposalsByCandidate(pbc);
      setProposalsByType(pbt);
    },
    // the proposals are updated depending on the spreadsheet query results
    [props]
  );

  return (
    <div>
      <Meta />
      <Header />
      <Explainer />
      <Filter filter={filter} setFilter={setFilter} />
      {filter === "candidate" ? (
        <TableByCandidate proposalsByCandidate={proposalsByCandidate} />
      ) : (
        <TableByType proposalsByType={proposalsByType} />
      )}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Fira Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
            sans-serif;
          --light-yellow: #ffeeaa;
        }

        .bg-light-yellow {
          background-color: var(--light-yellow);
        }
      `}</style>
    </div>
  );
};

App.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default App;
