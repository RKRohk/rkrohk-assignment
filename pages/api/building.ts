// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { CardProps } from "../../typings";
const sampleFundedProps: CardProps = {
  img_url: "",
  title: "The Pavalion III",
  location: "Outer Ring Road, Bangalore",
  funding_status: 100,
  area: 52277,
  price: 12338,
  yield: 9.14,
  return_target: 18.1,
  status: "FUNDED",
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const buildings = [2, 3, 4, 5, 6, 7].map((num) => ({
    ...sampleFundedProps,
    img_url: `/images/building${num}.png`,
  }));
  return res.json(buildings);
}
