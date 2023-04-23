// pages/api/posts/[id].js
import { readJsonFile } from '@/pages/api/readJsonFile';

export default async function handler(req, res) {
  const { id } = req.query
  const db = await readJsonFile()
  const product = db.products.filter(product => product.id === Number(id))
  res.status(200).json(product)
}
