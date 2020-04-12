import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
    let isSendByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSendByCurrentUser = true;
    }

    return (
        isSendByCurrentUser
            ? (
                <div className="bubble me">
                    <div className="text">
                        <p>{ ReactEmoji.emojify(text) } - { user } </p>
                    </div>
                </div>
            ) : (
                <div className="bubble">
                    <div className="text">
                        <p>{ ReactEmoji.emojify(text) } - { user } </p>
                    </div>
                </div>
            )
        
    )
}

export default Message;