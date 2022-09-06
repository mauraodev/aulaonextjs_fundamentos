import { useState } from "react";
import Layout from "../componentes/Layout";

export default function Integracao() {
  const [codigo, setCodigo] = useState(1);
  const [cliente, setCliente] = useState({});

  function obterCliente() {
    fetch("http://localhost:3000/api/clientes/" + codigo)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados));
  }

  return (
    <Layout>
      <div>
        <input
          type="number"
          name="codigo"
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={() => obterCliente()}>Obter Cliente</button>
      </div>
      <ul>
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.name}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  );
}