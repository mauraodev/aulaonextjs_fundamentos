import styles from '../styles/Estiloso.module.css'
import Navegador from '../componentes/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh',
            flexWrap: 'wrap',
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="crimson"/>
            <Navegador destino="/exemplo" texto="Exemplo"/>
            <Navegador destino="/jsx" texto="JSX"/>
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
            <Navegador destino="/cliente/sp-02/123" texto="Navegação #02" cor="blue"/>
            <Navegador destino="/estado" texto="Componente com Estado" cor="pink"/>
            <Navegador destino="/integracao" texto="Integração com API #01" cor="pink"/>
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#fa054a"/>
        </div>
    )
}