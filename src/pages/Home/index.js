import React from 'react'
import styles from './Home.module.css'
import posts from 'json/posts'
import PostCard from 'components/PostCard'

export default function Home() {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map(post => {
                    return <PostCard post={post} />
                })}
            </ul>
        </main>
    )
}
