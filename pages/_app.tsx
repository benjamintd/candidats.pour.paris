import Router from "next/router";
import withGA from "next-ga";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false
});
import "../styles/main.css";
import "tachyons/css/tachyons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default withGA("UA-72962798-4", Router)(MyApp);
