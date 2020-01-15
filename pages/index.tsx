import React, { useState } from "react";
import Header from "../components/Header";
import Explainer from "../components/Explainer";
import Filter from "../components/Filter";
import TableByCandidate from "../components/TableByCandidate";
import TableByType from "../components/TableByType";
import useProposals from "../hooks/useProposals";
import fetch from "isomorphic-unfetch";

const App = (props: ISheetData) => {
  const [filter, setFilter] = useState("candidate" as IFilter);

  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Header />
      <Explainer />
      <div className="mw8 center">
        <Filter filter={filter} />
        {filter === "candidate" ? (
          <TableByCandidate proposalsByCandidate={proposalsByCandidate} />
        ) : (
          <TableByType proposalsByType={proposalsByType} />
        )}
      </div>
    </>
  );
};

App.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default App;
