import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Header from "../../components/Header";
import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import TableByCandidate from "../../components/TableByCandidate";
import useProposals from "../../hooks/useProposals";

const Candidates = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);
  const router = useRouter();
  const candidat = router.query.candidat as string;

  return (
    <>
      <Header />
      <Explainer />
      <div className="mw8 center">
        <div className="flex justify-between w-100">
          <Filter filter={"candidate"} />
          <Link href="/candidats">
            <div className="pa3 mb2 dark-gray pointer dim">
              <span className="pa2 br3 ba b--dark-gray">
                afficher tous les candidats
              </span>
            </div>
          </Link>
        </div>
        {proposalsByCandidate[candidat] && (
          <TableByCandidate
            proposalsByCandidate={{
              [candidat]: proposalsByCandidate[candidat]
            }}
          />
        )}
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
