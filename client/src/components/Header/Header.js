import React from 'react';

import './Header.css';

const Header = ({ room }) => {
    return (
        <div className="headline">
            <h4>{ room }</h4>
            <a href="#">
                <i className="fas fa-trash"></i>
                Delete Conversation
            </a>
        </div>
    )
}

export default Header;