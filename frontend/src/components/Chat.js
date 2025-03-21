import React, { useState } from 'react';

function Chat({ account }) {
    const [message, setMessage] = useState('');
    const [reply, setReply] = useState('');

    const sendChatMessage = async () => {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, creatorTwitterHandle: 'CreatorTwitterHandle' }),
        });
        const data = await response.json();
        setReply(data.reply);
    };

    return (
        <div>
            <input type="text" placeholder="Chat with Creator" onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendChatMessage}>Send</button>
            <p>{reply}</p>
        </div>
    );
}

export default Chat;