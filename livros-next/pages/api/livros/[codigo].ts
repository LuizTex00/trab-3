import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codigo } = req.query;

    if (req.method === 'DELETE') {
      if (codigo !== undefined) {
        const codigoLivro = Number(codigo);
        controleLivro.excluir(codigoLivro);
        res.status(200).json({ message: 'Livro excluído com sucesso' });
      } else {
        res.status(400).json({ error: 'Invalid request. Provide codigo in the URL' });
      }
    } else {
      res.setHeader('Allow', ['DELETE']); // Indica os métodos permitidos
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', message:error });
  }
};