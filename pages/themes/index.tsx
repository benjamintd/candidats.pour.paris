import React from "react";
import Header from "../../components/Header";
import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import useProposals from "../../hooks/useProposals";
import fetch from "isomorphic-unfetch";
import TableByType from "../../components/TableByType";
import ContentContainer from "../../components/ContentContainer";

const Candidates = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Header />
      <Explainer />
      <ContentContainer>
        <Filter filter={"type"} />
        <TableByType proposalsByType={proposalsByType} />
      </ContentContainer>
    </>
  );
};

Candidates.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default Candidates;
