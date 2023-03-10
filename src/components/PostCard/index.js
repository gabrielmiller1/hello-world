import PrincipalButton from 'components/PrincipalButton';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt={`Capa para post de ${post.titulo}`} />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <PrincipalButton>
          Ler
        </PrincipalButton>
      </div>
    </Link>
  )
}
