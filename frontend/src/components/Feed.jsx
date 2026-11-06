import MessageCard from './MessageCard'
import { useState } from 'react'

const Feed = ({ messages = [], title = 'Сообщения' }) => {

    
    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {messages.map((message, i) => (
                            <MessageCard key={i} {...message} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed
