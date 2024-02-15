import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from './index';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codEditora } = req.query;

    if (req.method === 'GET') {
      if (codEditora !== undefined) {
        const codigoEditora = Number(codEditora);
        const nomeEditora = controleEditora.getNomeEditora(codigoEditora);

        if (nomeEditora !== 'Editora não encontrada') {
          res.status(200).json({ codEditora: codigoEditora, nome: nomeEditora });
        } else {
          res.status(404).json({ error: 'Editora not found' });
        }
      } else {
        res.status(400).json({ error: 'Invalid request. Provide codEditora in the URL' });
      }
    } else {
      res.setHeader('Allow', ['GET']); 
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message:error});
  }
};