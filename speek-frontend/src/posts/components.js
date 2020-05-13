import React, { useEffect, useState } from 'react'

import { PostCreate } from './create'
import { Post } from './detail'
import { apiPostDetail } from './lookup'
import { FeedList } from './feed'
import { PostsList } from './list'

export function FeedComponent(props) {
    const [newPosts, setNewPosts] = useState([])
    const canPost = props.canPost === "false" ? false : true
    const handleNewPost = (newPost) => {
        let tempNewPosts = [...newPosts]
        tempNewPosts.unshift(newPost)
        setNewPosts(tempNewPosts)
    }
    return <div className={props.className}>
        {canPost === true && <PostCreate didPost={handleNewPost} className='col-12 mb-3' />}
        <FeedList newPosts={newPosts} {...props} />
    </div>
}


export function PostComponent(props) {
    const [newPosts, setNewPosts] = useState([])
    const canPost = props.canpost === "false" ? false : true
    const handleNewPost = (newPost) => {
        let tempNewPosts = [...newPosts]
        tempNewPosts.unshift(newPost)
        setNewPosts(tempNewPosts)
    }
    return <div className={props.className}>
        {canPost === true && <PostCreate didPost={handleNewPost} className='col-12 mb-3' />}
        <PostsList newPosts={newPosts} {...props} />
    </div>
}

export function PostDetailComponent(props) {
    const { postId } = props
    const [didLookup, setDidLookup] = useState(false)
    const [post, setPost] = useState(null)

    const handleBackendLookup = (response, status) => {
        if (status === 200) {
            setPost(response)
        } else {
            alert("There was an error finding your post.")
        }
    }
    useEffect(() => {
        if (didLookup === false) {

            apiPostDetail(postId, handleBackendLookup)
            setDidLookup(true)
        }
    }, [postId, didLookup, setDidLookup])

    return post === null ? null : <Post post={post} className={props.className} />
}

