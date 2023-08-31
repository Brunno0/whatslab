import React from 'react';

function Message({ message, deleteMessage }) {
    const position = message.user === "Eu" ? "right" : "left";

    return (
        <div onDoubleClick={() => deleteMessage(message)}>
            <div style={{ 
                textAlign: position, 
                }}>
                {message.text}
            </div>
        </div>
    );
}

export default Message;
