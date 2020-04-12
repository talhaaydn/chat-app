import React from 'react';

import './Input.css'

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form>
            <div className="reply">
                <textarea 
                    rows="1" 
                    cols="1" 
                    value={message}
                    placeholder="Your Message"
                    onChange={event => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
                
                <button onClick={event => sendMessage(event)}>Send</button>
            </div>
        </form>
    )
}

export default Input;