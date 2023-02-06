import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({children, to}) {
    const location = useLocation();

    return (
        <Link to={to} className={`
            ${styles.link}
            ${location.pathname === to ? styles.linkActive : ''}`}>
            {children}
        </Link>
    )
}
