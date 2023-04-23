import { promises as fs } from 'fs';
import path from 'path'

export async function readJsonFile() {
  const jsonDirectory = path.join(process.cwd(), 'db')
  const fileContents = await fs.readFile(jsonDirectory + '/products.json', 'utf8')
  const products = JSON.parse(fileContents)
  return products
}
