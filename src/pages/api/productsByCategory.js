import { readJsonFile } from './readJsonFile';

export default async function productsByCategry(req, res) {
  if (req.method === 'POST') {
    const category = req.body
    const db = await readJsonFile()
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    category !== 'all'
      ? res.end(JSON.stringify(db.products.filter(product => product.category === category)))
      : res.end(JSON.stringify(db.products))
  }
}
