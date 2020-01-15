import React from "react";
import Header from "../../components/Header";
import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import TableByCandidate from "../../components/TableByCandidate";
import useProposals from "../../hooks/useProposals";
import fetch from "isomorphic-unfetch";

const Candidates = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);

  return (
    <>
      <Header />
      <Explainer />
      <div className="mw8 center">
        <Filter filter={"candidate"} />
        <TableByCandidate proposalsByCandidate={proposalsByCandidate} />
      </div>
    </>
  );
};

Candidates.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default Candidates;
