import { NextApiRequest, NextApiResponse } from 'next';
import { queryEmbedding } from '../../lib/langchain';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const question = req.body.question;
  const result = await queryEmbedding(question);
  res.status(200).json({ result });
};