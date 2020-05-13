import React, { useEffect, useState } from 'react'

import { apiPostFeed } from './lookup'
import { Post } from './detail'

export function FeedList(props) {
    const [postsInit, setPostsInit] = useState([])
    const [posts, setPosts] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [postsDidSet, setPostsDidSet] = useState(false)
    useEffect(() => {
        const final = [...props.newPosts].concat(postsInit)
        if (final.length !== posts.length) {
            setPosts(final)
        }
    }, [props.newPosts, posts, postsInit])
    useEffect(() => {
        if (postsDidSet === false) {
            const handlePostListLookUp = (response, status) => {
                if (status === 200) {
                    setNextUrl(response.next)
                    setPostsInit(response.results)
                    setPostsDidSet(true)
                } else {
                    alert("There was an error")
                }
            }
            apiPostFeed(handlePostListLookUp)
        }
    }, [postsInit, postsDidSet, setPostsDidSet, props.username])

    const handleDidRepost = (newPost) => {
        const updatePostsInit = [...postsInit]
        updatePostsInit.unshift(newPost)
        setPostsInit(updatePostsInit)
        const updateFinalPosts = [...posts]
        updateFinalPosts.unshift(posts)
        setPosts(updateFinalPosts)
    }

    const handleLoadNext = (event) => {
        event.preventDefault()
        if (nextUrl !== null) {
            const handleLoadNextResponse = (response, status) => {
                if (status === 200) {
                    setNextUrl(response.next)
                    const newPosts = [...posts].concat(response.results)
                    setPostsInit(newPosts)
                    setPosts(newPosts)
                }
            }
            apiPostFeed(handleLoadNextResponse, nextUrl)
        }
    }

    return <React.Fragment>{posts.map((item, index) => {
        return <Post
            post={item}
            didRepost={handleDidRepost}
            className='my-5 py-5 border bg-white text-dark'
            key={`${index}-{item.id}`} />
    })}
        {nextUrl !== null && <button onClick={handleLoadNext} className='btn btn-outline-primary'>Load next</button>}
    </React.Fragment>
}