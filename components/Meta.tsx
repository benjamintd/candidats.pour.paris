import Head from "next/head";

export default () => {
  return (
    <Head>
      {/* insert SEO tags here */}
      <title>
        Candidats Pour Paris - Toutes les propositions concrètes et sourcées
      </title>
      <meta
        name="description"
        content="Toutes les propositions concrètes et sourcées des candidats à la mairie de Paris"
      />
      <meta
        name="og:title"
        property="og:title"
        content="Candidats Pour Paris"
      />
      <meta
        name="og:description"
        property="og:description"
        content="Toutes les propositions concrètes et sourcées des candidats à la mairie de Paris"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Bree+Serif|Fira+Sans:300,400&display=swap"
        rel="stylesheet"
      />
      <link href="/favicon.png" rel="icon" />
    </Head>
  );
};
