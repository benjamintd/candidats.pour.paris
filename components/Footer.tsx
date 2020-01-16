import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const path = router.pathname;
  let href, link;
  if (path.includes("trends")) {
    href = "/";
    link = (
      <span>
        Explorez aussi leurs principales propositions <strong>concrètes</strong>{" "}
        et <strong>sourcées</strong> ➡️
        <style jsx>{`
          strong {
            background-color: var(--light-yellow);
            padding: 3px;
          }
        `}</style>
      </span>
    );
  } else {
    href = "/trends";
    link = (
      <span>
        Explorez aussi l'évolution de l'intérêt des recherches Google pour les
        principaux candidats ➡️
      </span>
    );
  }
  return (
    <div className="bg-near-white bottom-0 mt4 bt b--moon-gray shadow-4 w-100 ph4 pv3 tc">
      <Link href={href}>
        <a className="link black underline-hover b">{link}</a>
      </Link>
    </div>
  );
};
