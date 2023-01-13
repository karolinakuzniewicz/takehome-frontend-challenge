import { NextApiRequest, NextApiResponse } from "next";

import mockedData from "../api/companies.json";
import { Company } from "../../types";

interface Request extends NextApiRequest {
  query: { cursor: string; pageSize: string };
}

const PAGE_SIZE = 100;

export default function handler(req: Request, res: NextApiResponse) {
  const cursor = parseInt(req.query.cursor) || 0;
  const pageSize = parseInt(req.query.pageSize) || PAGE_SIZE;
  const endCursor = (mockedData as Company[]).length - pageSize;

  const data = (mockedData as Company[])
    .slice(cursor, cursor + 1 + pageSize)
    .map((company, i) => {
      return {
        company,
        id: i + cursor,
      };
    });

  const nextId = cursor < endCursor ? data?.[data?.length - 1]?.id + 1 : null;
  const previousId = cursor > -endCursor ? data?.[0]?.id - pageSize : null;

  res.status(200).json({ data, nextId, previousId });
}
