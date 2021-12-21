import Layout from "../../../componentes/Layout";
import { useRouter } from "next/router";

export default function ClientePorCodigo () {
    const router = useRouter();

    return (
        <Layout titulo="Navegação dinâmica">
            <div>Filial = {router.query.filial}</div>
            <div>Código = {router.query.codigo}</div>
        </Layout>
    )
}