import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import TemplatePost from 'components/TemplatePost';
import ReactMarkdown from 'react-markdown';
import './Post.css';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

import styles from './Post.module.css'
import PostCard from 'components/PostCard';

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NotFound />;
    }

    const recomendedsPosts = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) =>  b.id - a.id)
        .slice(0, 4);
        
    console.log(recomendedsPosts)

    return (
        <Routes>
            <Route path='*' element={<DefaultPage />}>
                <Route index element={
                    <TemplatePost
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                        <ul className={styles.postsRecomendados}>
                            {recomendedsPosts.map(post => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>
                    </TemplatePost>
                }>
                </Route>
            </Route>
        </Routes>

    )
}
