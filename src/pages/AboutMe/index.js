import Banner from 'components/Banner'
import TemplatePost from 'components/TemplatePost'
import React from 'react'

import fotoCapa from 'assets/sobre_mim_capa.png'
import imagemSobreMim from 'assets/sobre_mim_foto.png'

import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <TemplatePost
      fotoCapa={fotoCapa}
      titulo={'Sobre mim'}
    >
      <h3 className={styles.subtitulo}>
        Olá, sou o Gabriel!
      </h3>
      <img src={imagemSobreMim} alt="Foto sobre mim" className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis, eaque obcaecati dolore quibusdam incidunt quod quasi ut id corrupti iure aliquam? Eos ipsum quisquam illo doloribus, nobis a nihil?</p>
      <p className={styles.paragrafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem beatae maiores aspernatur reprehenderit. Iure eveniet dignissimos vitae quos voluptatibus magnam sint qui consequatur asperiores, quam enim alias aliquid odit.</p>
      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero aliquam assumenda molestiae quo. Dignissimos ratione ullam laudantium in architecto aperiam. Dignissimos molestias iste velit at pariatur. Fugit, rerum velit.</p>

    </TemplatePost>
  )
}
