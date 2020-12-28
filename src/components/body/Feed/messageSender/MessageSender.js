import React,{ useState } from 'react';
import './MessageSender.css';
import firebase from 'firebase';
import { db } from '../../../../firebase'; 
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, Videocam, PhotoLibrary } from '@material-ui/icons';
import { useStateValue } from '../../../../ContextApi/provider';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput ] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            profilePic: user.photoURL,
            username: user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            image: imageUrl
        })
        
        setInput('');
        setImageUrl('');
    }
    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        value={input}
                        onChange={(e )=> setInput(e.target.value)}
                        className='messageSender__input' type='text' placeholder={`What's on your mind? ${user.displayName}`}/>
                    <input
                        value={imageUrl}
                        onChange={(e )=> setImageUrl(e.target.value)}
                        placeholder='image URL (Optional)'/>
                    <button onClick={handleSubmit}>hidden submit</button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <Videocam style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibrary style={{color:'green'}}/>
                    <h3>Photot/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticon style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
