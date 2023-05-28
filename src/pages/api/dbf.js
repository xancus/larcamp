import { DBFFile } from 'dbffile';
import path from 'path'

export default async function dbf(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'db')
  const dbf = await DBFFile.open(jsonDirectory + '/inventariol.dbf');
  // console.log(dbf.length
  for await (const record of dbf) {
    console.log(record.LINDSEC)
  }

  res.status(200).json({ name: 'hola' })
}
