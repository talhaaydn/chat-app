import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-container-inner">
            <h1 className="header">Join Chat</h1>
            <div>
                <input 
                    type="text" 
                    className="join-input" 
                    placeholder="Your Name" 
                    onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input 
                    type="text" 
                    className="join-input mt-20" 
                    placeholder="Room Code" 
                    onChange={(event) => setRoom(event.target.value)} />
            </div>

            <Link 
                to={`/chat?name=${name}&room=${room}`}
                onClick={ event => (!name || !room) ? event.preventDefault() : null }>
                <button type="submit" className="button mt-20">Join</button>
            </Link>
        </div>
    )
}

export default Join;