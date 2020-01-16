import React from "react";
import fetch from "isomorphic-unfetch";

import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import TableByCandidate from "../../components/TableByCandidate";
import useProposals from "../../hooks/useProposals";

const Candidates = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Explainer />
      <Filter filter={"candidate"} />
      <TableByCandidate proposalsByCandidate={proposalsByCandidate} />
    </>
  );
};

Candidates.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default Candidates;
