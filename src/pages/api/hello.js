// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path'
export default function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'db')
  const filePath = `${jsonDirectory}\\products.json`
  res.status(200).json({ name: filePath })
}
