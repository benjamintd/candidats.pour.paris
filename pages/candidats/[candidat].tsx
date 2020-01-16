import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import TableByCandidate from "../../components/TableByCandidate";
import useProposals from "../../hooks/useProposals";
import Defilter from "../../components/Defilter";

const Candidates = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);
  const router = useRouter();
  const candidat = router.query.candidat as string;

  return (
    <>
      <Explainer />
      <div className="flex justify-between w-100">
        <Filter filter={"candidate"} />
        <Defilter href="/candidats">afficher tous les candidats</Defilter>
      </div>
      {proposalsByCandidate[candidat] && (
        <TableByCandidate
          proposalsByCandidate={{
            [candidat]: proposalsByCandidate[candidat]
          }}
        />
      )}
    </>
  );
};

Candidates.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default Candidates;
