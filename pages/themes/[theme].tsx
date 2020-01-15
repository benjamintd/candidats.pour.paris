import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import Header from "../../components/Header";
import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import TableByTheme from "../../components/TableByType";
import useProposals from "../../hooks/useProposals";
import Link from "next/link";

const Themes = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);
  const router = useRouter();
  const theme = router.query.theme as string;

  return (
    <>
      <Header />
      <Explainer />
      <div className="mw8 center">
        <div className="flex justify-between w-100">
          <Filter filter={"type"} />
          <Link href="/themes">
            <div className="pa3 mb2 dark-gray pointer">
              <span className="pa2 br3 ba b--dark-gray">
                afficher tous les thèmes
              </span>
            </div>
          </Link>
        </div>
        {proposalsByType[theme] && (
          <TableByTheme
            proposalsByType={{
              [theme]: proposalsByType[theme]
            }}
          />
        )}
      </div>
    </>
  );
};

Themes.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default Themes;
