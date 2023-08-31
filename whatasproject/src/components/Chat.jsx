import React, { useState } from 'react';
import MessageForm from './MessageForm';
import Message from './Message';

function Chat() {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        const updatedMessages = [...messages, message];
        setMessages(updatedMessages);
    };

    const deleteMessage = (message) => {
        const updatedMessages = messages.filter((msg) => msg !== message);
        setMessages(updatedMessages);
    };

    const messagesMap = messages.map((message) => (
        <Message key={message.text} message={message} deleteMessage={deleteMessage} />
    ));

    return (
        <div>
            {messagesMap}
            <MessageForm addMessage={addMessage} />
        </div>
    );
}

export default Chat;
