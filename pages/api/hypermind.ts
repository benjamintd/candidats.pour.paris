import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

const candidates: { [key: string]: ICandidat } = {
  "26548": "Rachida Dati",
  "26550": "Benjamin Griveaux",
  "26551": "Anne Hidalgo",
  "26552": "Cédric Villani"
};

const order: ICandidat[] = [
  "Anne Hidalgo",
  "Benjamin Griveaux",
  "Cédric Villani",
  "Rachida Dati"
];

const colors: { [key: string]: string } = {
  "26548": "#43A047",
  "26550": "#F44336",
  "26551": "#4285f4",
  "26552": "#FFCA28"
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const oneMonthAgo = 1576666869347; // Date.now() - 30 * 24 * 60 * 60 * 1000;
  const reqData = [
    [
      "trnmt",
      "listQuestions",
      {
        paths: ["/Hypermind/PARIS2020"],
        fmt: {
          props: true,
          cond: {
            props: true,
            otcm: {
              props: true,
              trade: { summary: true },
              tradesSince: oneMonthAgo
            }
          },
          otcm: {
            props: true,
            trade: { summary: true },
            tradesSince: oneMonthAgo
          }
        }
      }
    ]
  ];

  // const hmData = await fetch(
  //   "https://predict.hypermind.com/hypermind/jsx.json",
  //   {
  //     method: "POST",
  //     mode: "cors",
  //     body: `jsx=${encodeURI(JSON.stringify(reqData))}`
  //   }
  // );
  const hmData = await fetch(
    "https://predict.hypermind.com/hypermind/jsx.json",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://predict.hypermind.com/hypermind/app.html?fwd=",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `jsx=${encodeURI(JSON.stringify(reqData))}`,
      method: "POST",
      mode: "cors"
    }
  );
  const rawjson = await hmData.json();

  const outcomes = rawjson[0][0].otcms
    .map(outcome => {
      const id = outcome.id.toString();
      if (!candidates[id]) {
        return null;
      } else {
        outcome.props = {
          color: colors[id],
          title: candidates[id]
        };
        return outcome;
      }
    })
    .filter(outcome => !!outcome)
    .sort(
      (a, b) =>
        order.indexOf(candidates[a.id.toString()]) -
        order.indexOf(candidates[b.id.toString()])
    );

  res.setHeader("Cache-Control", "s-maxage=3600");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.status(200).json(outcomes);
};
