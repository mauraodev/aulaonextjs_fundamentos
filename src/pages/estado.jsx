import { useState } from "react";
import Layout from "../componentes/Layout";

export default function Estado() {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }

    return (
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}