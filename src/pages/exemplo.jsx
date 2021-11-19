import Layout from "../componentes/Layout";
import Cabecalho from "../componentes/Cabecalho";

export default function Exemplo() {
    return (
        <Layout titulo="Exemplo">
            <div>
                <Cabecalho titulo='titulo 1'/>
                <Cabecalho titulo='titulo 2'/>
            </div>
        </Layout>
    )
}