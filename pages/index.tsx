import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Explainer from "../components/Explainer";
import Table from "../components/Table";
import fetch from "isomorphic-unfetch";

interface IProps {
  records: Array<{
    Proposition: string;
    Candidat: ICandidat;
    Type: IPropositionType;
    Source: string;
  }>;
}

const App = (props: IProps) => {
  const [
    proposalsByCandidateAndType,
    setProposalsByCandidateAndType
  ] = useState({});

  useEffect(() => {
    const r = {};
    props.records.forEach(rec => {
      if (!r[rec.Candidat]) r[rec.Candidat] = {};
      if (!r[rec.Candidat][rec.Type]) r[rec.Candidat][rec.Type] = [];
      r[rec.Candidat][rec.Type].push({
        text: rec.Proposition,
        source: rec.Source
      });
    });

    setProposalsByCandidateAndType(r);
  }, [props]);

  return (
    <div>
      <Meta />
      <Header />
      <Explainer />
      <Table proposalsByCandidateAndType={proposalsByCandidateAndType} />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Fira Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
            sans-serif;
        }
      `}</style>
    </div>
  );
};

App.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/data");
  const data = await res.json();
  return data;
};

export default App;
