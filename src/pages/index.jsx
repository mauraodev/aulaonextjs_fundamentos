import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Inicio() {
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando</h1>
            <Link href='/estiloso'>Estiloso</Link>
        </div>
    )
}