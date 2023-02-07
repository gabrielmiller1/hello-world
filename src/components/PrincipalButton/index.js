import React from 'react'

import styles from './PrincipalButton.module.css';

export default function PrincipalButton({ children, tamanho }) {
    return (
        <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}>{children}</button>
    )
}
