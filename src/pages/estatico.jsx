import Layout from "../componentes/Layout";

export async function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico(props) {
  return (
    <Layout titulo="Conteúdo Estático">
      <div>{props.numero}</div>
    </Layout>
  );
}
