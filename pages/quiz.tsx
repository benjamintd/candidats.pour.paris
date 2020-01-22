import React from "react";
import fetch from "isomorphic-unfetch";
import useQuiz from "../hooks/useQuiz";
import Quiz from "../components/Quiz";
import Head from "next/head";

const App = (props: ISheetData) => {
  const quiz = useQuiz(props);

  return (
    <>
      <Head>
        <meta
          name="og:title"
          property="og:title"
          content="Candidats Pour Paris - Pour qui voter ?"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Comparez les candidats à la mairie de Paris"
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://candidats.pour.paris/og-quiz.jpg"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://candidats.pour.paris/quiz"
        />
      </Head>
      <Quiz data={quiz} />
    </>
  );
};

App.getInitialProps = async ctx => {
  const res = await fetch("https://candidats.pour.paris/api/propositions");
  const data = await res.json();
  return data;
};

export default App;
