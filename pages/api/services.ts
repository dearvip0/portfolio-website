import { NextApiRequest, NextApiResponse } from "next";

import { services } from "../../data";
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ services });
};
