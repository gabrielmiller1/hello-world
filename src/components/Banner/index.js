import styles from './Banner.module.css';
import React from 'react'

import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit fugiat, deserunt, dolorem id aspernatur temporibus minus explicabo sit architecto quas asperiores expedita unde non alias. Distinctio alias dicta perspiciatis magni.
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="" aria-hidden='true'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do professor" />
            </div>
        </div>
    ) 
}