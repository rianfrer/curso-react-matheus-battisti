import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseConteiner}>
            <p className={styles.fraseContent}>Este é o componente com uma frase</p>
        </div>
    )
}

export default Frase