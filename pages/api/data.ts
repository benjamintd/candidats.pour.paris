import { NextApiRequest, NextApiResponse } from "next";
import fetch from "isomorphic-unfetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const sheetRes = await fetch(
    "https://script.google.com/macros/s/AKfycbzGvKKUIaqsMuCj7-A2YRhR-f7GZjl4kSxSN1YyLkS01_CfiyE/exec?id=12bldIbAg95LyJ27keQ0w34lkFrsDnsYQpYb_GVSQgZ8&sheet=Propositions&header=1&startRow=3&Valid%C3%A9=true"
  );
  const sheetData = await sheetRes.json();

  res.setHeader("Cache-Control", "s-maxage=3600");
  res.status(200).json(sheetData);
};
