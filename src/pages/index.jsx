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
        </div>
    )
}