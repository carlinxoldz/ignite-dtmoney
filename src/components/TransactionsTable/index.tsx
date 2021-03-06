import { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("/transactions").then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$5.000</td>
            <td>Desenvolvimento</td>
            <td>30/03/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$2.200</td>
            <td>Casa</td>
            <td>15/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
