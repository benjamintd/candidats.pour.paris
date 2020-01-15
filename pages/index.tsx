import React, { useState } from "react";
import Header from "../components/Header";
import Explainer from "../components/Explainer";
import Filter from "../components/Filter";
import TableByCandidate from "../components/TableByCandidate";
import TableByType from "../components/TableByType";
import useProposals from "../hooks/useProposals";
import fetch from "isomorphic-unfetch";
import ContentContainer from "../components/ContentContainer";

const App = (props: ISheetData) => {
  const [filter, setFilter] = useState("candidate" as IFilter);

  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Header />
      <Explainer />
      <ContentContainer>
        <Filter filter={filter} />
        {filter === "candidate" ? (
          <TableByCandidate proposalsByCandidate={proposalsByCandidate} />
        ) : (
          <TableByType proposalsByType={proposalsByType} />
        )}
      </ContentContainer>
    </>
  );
};

App.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default App;
