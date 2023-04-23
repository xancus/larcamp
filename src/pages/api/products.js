/* export default async function handle(req, res) {
    const env = {
        DB_URL: process.env.DB_URL,
        MODE: process.env.NODE_ENV
    }
    return env
} */
import { readJsonFile } from '@/pages/api/readJsonFile';
export default async function products(req, res) {
  const db = await readJsonFile()
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(db));
}
