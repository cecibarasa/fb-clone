import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>
            <Post 
            // key={id}
            profilePic="https://images.unsplash.com/photo-1636917883970-bde3d85f6d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            message="WOW this works!"
            timestamp="this is a timestamp"
            username="Jazz"
            image="https://images.unsplash.com/photo-1498743119273-4d87c2f9c76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            />
            <Post 
            profilePic="https://images.unsplash.com/photo-1636917883970-bde3d85f6d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            message="WOW this works!"
            timestamp="this is a timestamp"
            username="Jazz"
            image="https://images.unsplash.com/photo-1498743119273-4d87c2f9c76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            />
            <Post 
            profilePic="https://images.unsplash.com/photo-1636917883970-bde3d85f6d30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            message="WOW this works!"
            timestamp="this is a timestamp"
            username="Jazz"
            image="https://images.unsplash.com/photo-1498743119273-4d87c2f9c76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
            />
            
        </div>
    )
}

export default Feed
