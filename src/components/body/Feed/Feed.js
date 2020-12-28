import React,{ useEffect, useState} from 'react';
import './Feed.css';
import StoryReel from './storyReel/StoryReel';
import MessageSender from './messageSender/MessageSender';
import Posts from './posts/Posts';
import { db } from '../../../firebase'; 

function Feed() {
    const [posts, setPosts] =  useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapShot => setPosts(snapShot.docs.map(doc => ({ id:doc.id, data:doc.data() }))))
    },[])
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.length !== 0 ? posts.map(post => <Posts 
                key={post.id} 
                profilePic={post.data.profilePic} 
                message={post.data.message} 
                username={post.data.username} 
                image={post.data.image} 
                timestamp={post.data.timestamp}
                />
                ): ''}
        </div>
    )
}

export default Feed
