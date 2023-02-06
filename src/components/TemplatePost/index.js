import { Children } from 'react';
import styles from './TemplatePost.module.css';

export default function TemplatePost({ fotoCapa, titulo, children }) {
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postConteudo}>
                {children}
            </div>
        </article>
    )
}