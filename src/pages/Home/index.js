import React from 'react'
import styles from './Home.module.css'
import posts from 'json/posts'
import Post from 'components/Post'

export default function Home() {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map(post => {
                    return <Post post={post} />
                })}
            </ul>
        </main>
    )
}
