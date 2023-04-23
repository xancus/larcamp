import { readJsonFile } from './readJsonFile'

export default async function searchProductByKeyword(req, res) {
  if (req.method === 'POST') {
    const keyword = req.body
    const db = await readJsonFile()
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const products = db.products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()))
    res.end(JSON.stringify(products))
  }
}
