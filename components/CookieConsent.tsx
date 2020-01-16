import React from "react";
import { useLocalStorage } from "@rehooks/local-storage";

export default () => {
  const [cookieConsent, setCookieConsent] = useLocalStorage("cookie-consent");
  if (cookieConsent) {
    return null;
  } else {
    return (
      <div className="pa2 fixed bottom-0 w-100 bg-light-gray shadow-1 f6 flex space-between">
        <div>
          Nous utilisons des cookies pour mieux savoir comment ce site est
          utilisé.
        </div>
        <div className="ml-auto">
          <button onClick={() => setCookieConsent("true")}>OK</button>
        </div>
      </div>
    );
  }
};
