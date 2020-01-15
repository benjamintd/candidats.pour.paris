import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

import Header from "../../components/Header";
import Explainer from "../../components/Explainer";
import Filter from "../../components/Filter";
import TableByTheme from "../../components/TableByType";
import useProposals from "../../hooks/useProposals";
import ContentContainer from "../../components/ContentContainer";
import Defilter from "../../components/Defilter";

const Themes = (props: ISheetData) => {
  const [proposalsByCandidate, proposalsByType] = useProposals(props);
  const router = useRouter();
  const theme = router.query.theme as string;

  return (
    <>
      <Header />
      <Explainer />
      <ContentContainer>
        <div className="flex justify-between w-100">
          <Filter filter={"type"} />
          <Defilter href="/themes">afficher tous les thèmes</Defilter>
        </div>
        {proposalsByType[theme] && (
          <TableByTheme
            proposalsByType={{
              [theme]: proposalsByType[theme]
            }}
          />
        )}
      </ContentContainer>
    </>
  );
};

Themes.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default Themes;
