import React from "react";
import Link from "next/link";
import { countBy, flatten, sum, values } from "lodash";
import candidatesInfo from "./candidatesInfo";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

export default ({ results }: { results: ICandidat[][] }) => {
  const tally = countBy(flatten(results));
  const total = sum(values(tally));
  const winner = Object.keys(tally).sort((a, b) => tally[b] - tally[a])[0];

  return (
    <div className="w-100 pa4 flex flex-column justify-center">
      <div className="pv3 lh-copy tc">
        <p className="f3">
          La personne qui correspond le plus à vos convictions est{" "}
          <Link
            href="/candidats/[candidat]"
            as={"/candidats/" + encodeURI(winner)}
          >
            <strong className="pointer black link underline-hover">
              {winner}
            </strong>
          </Link>
          .
        </p>
        <div className="w-100 flex justify-center">
          <div className="w4-l h4-l w3 h3 flex items-center ">
            <img
              className="br-100 ba bw2 b--light-gray"
              src={candidatesInfo[winner].image}
              alt={winner}
            />
          </div>
        </div>
        <p className="f4">
          Retrouvez toutes ses propositions et celles des autres candidats{" "}
          <Link href="/">
            <a className="black link underline">ici</a>
          </Link>
          &nbsp;!
        </p>
      </div>
      <table className="mh4">
        <colgroup>
          <col className="w5" />
          <col className="w-100" />
        </colgroup>
        <tbody>
          {Object.keys(tally)
            .sort((a, b) => tally[b] - tally[a])
            .filter(c => !!c)
            .map(candidate => (
              <CandidateResults
                key={candidate}
                candidate={candidate}
                proportion={tally[candidate] / total}
              />
            ))}
        </tbody>
      </table>
      <div className="flex justify-around pv5 ph4">
        <EmailShareButton
          url={"https://candidats.pour.paris/quiz"}
          subject="Élections à la mairie de Paris"
          body={`J'ai préféré les propositions de ${winner}, et toi ?`}
        >
          <EmailIcon size={28} />
        </EmailShareButton>
        <LinkedinShareButton
          url={"https://candidats.pour.paris/quiz"}
          title={`Les propositions les plus pertinentes sont celles de ${winner}`}
          summary="Ce sondage permet de découvrir les propositions concrètes des candidats à l'élection municipale de Paris."
        >
          <LinkedinIcon size={28} />
        </LinkedinShareButton>
        <FacebookShareButton
          url={"https://candidats.pour.paris/quiz"}
          quote={`Je voterais pour ${winner}, et toi ?`}
        >
          <FacebookIcon size={28} />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://candidats.pour.paris/quiz"}
          title={`D'après ce site je voterais pour ${winner} aux #municipales2020`}
        >
          <TwitterIcon size={28} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"https://candidats.pour.paris/quiz"}
          title={`D'après ce site je voterais pour ${winner} aux municipales de Paris`}
          separator=" "
        >
          <WhatsappIcon size={28} />
        </WhatsappShareButton>
      </div>
      <style jsx>{`
        strong {
          background-color: var(--light-yellow);
          padding: 3px;
        }
      `}</style>
    </div>
  );
};

const CandidateResults = ({
  candidate,
  proportion
}: {
  candidate: string;
  proportion: number;
}) => (
  <tr>
    <td>
      <Link
        href="/candidats/[candidat]"
        as={"/candidats/" + encodeURI(candidate)}
      >
        <a className="pointer black link underline-hover">{candidate}</a>
      </Link>
    </td>
    <td className="pa0 relative h2">
      <div className="br2 h2 w-100">
        <div
          className="h-100 tr white-80 f5 flex items- justify-end pa2 br2"
          style={{
            backgroundColor: candidatesInfo[candidate].color,
            width: `${100 * proportion}%`
          }}
        >
          {(100 * proportion).toFixed(0)}&nbsp;%
        </div>
      </div>
    </td>
    <style jsx>{`
      td {
        padding: 0.3rem;
        min-width: 120px;
      }
    `}</style>
  </tr>
);
