import React from "react";
import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import useProposals from "../../hooks/useProposals";
import fetch from "isomorphic-unfetch";
import TableByType from "../../components/TableByType";

const Candidates = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Explainer />
      <Filter filter={"type"} />
      <TableByType proposalsByType={proposalsByType} />
    </>
  );
};

Candidates.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/propositions");
  const data = await res.json();
  return data;
};

export default Candidates;
