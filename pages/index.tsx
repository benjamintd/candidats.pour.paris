import React, { useState } from "react";

import Explainer from "../components/Explainer";
import Filter from "../components/Filter";
import TableByCandidate from "../components/TableByCandidate";
import TableByType from "../components/TableByType";
import useProposals from "../hooks/useProposals";
import fetch from "isomorphic-unfetch";

const App = (props: ISheetData) => {
  const [filter] = useState("candidate" as IFilter);

  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Explainer />
      <Filter filter={filter} />
      {filter === "candidate" ? (
        <TableByCandidate proposalsByCandidate={proposalsByCandidate} />
      ) : (
        <TableByType proposalsByType={proposalsByType} />
      )}
    </>
  );
};

App.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/propositions");
  const data = await res.json();
  return data;
};

export default App;
