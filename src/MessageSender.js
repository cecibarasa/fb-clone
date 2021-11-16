import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {

    const [ input, setInput] = useState('');
    const [ imageUrl, setImageUrl ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //Some clever db stuff

        setInput("");
        setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input 
                    value = {input}
                    onChange ={e => setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={"What's on your mind?"} type="text" />
                    <input
                    value = {imageUrl}
                    onChange ={e => setImageUrl(e.target.value)}
                     placeholder={"image URL (Optional)"}/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>PhotoVideo</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender