import Image from "next/image"

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import styles from '../styles/Loading.module.css'

export default function Loading( {loadingContent} ) {
    return (
        <div className={styles.loadingContainer}>
            <p>Carregando o {loadingContent}, por favor aguarde...</p>
            <AiOutlineLoading3Quarters className={styles.loaderIcon} size="5em"/>
        </div>
    )
}