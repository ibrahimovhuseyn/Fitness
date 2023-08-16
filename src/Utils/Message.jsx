import React from 'react'

function Message({sender, text}) {
    return (
        <div>
            <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Message