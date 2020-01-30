import Router from "next/router";
import withGA from "next-ga";
import dynamic from "next/dynamic";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

import Meta from "../components/Meta";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false
});

import "../styles/main.css";
import "tachyons/css/tachyons.css";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-vh-100 flex flex-column">
      <Meta />
      <Header />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default withGA("UA-72962798-4", Router)(MyApp);
