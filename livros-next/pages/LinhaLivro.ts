// componentes/LinhaLivro.tsx
import React from "react";
import Livro from "../classes/modelo/Livro";

interface LinhaLivroProps {
  livro?: Livro; // Adicionado '?' para indicar que é opcional
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  if (!livro) {
    return null; // Ou qualquer outra lógica de tratamento, como exibir uma mensagem de erro
  }

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.codEditora}</td>
      <td>
        <ul>
          {livro.autores?.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={excluir} className="btn btn-danger">
          Excluir
        </button>
      </td>
    </tr>
  );
};
