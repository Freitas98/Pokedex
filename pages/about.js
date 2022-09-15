import Image from "next/image";
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam explicabo! Ab assumenda fugit delectus perspiciatis quibusdam sed animi sapiente. Ipsam, neque animi accusamus ipsa voluptates accusantium! Esse voluptate corrupti labore sint totam laudantium distinctio libero iste, aliquid adipisci sit.
            </p>
            <Image 
                src="/images/charizard.png" 
                width="450" 
                height="350"
                alt="Charizard"
            />
        </div>
    )
}