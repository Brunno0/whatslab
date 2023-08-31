import React from 'react';

function Message({ message, deleteMessage }) {
    const position = message.user === "Eu" ? "right" : "left";

    return (
        <div onDoubleClick={() => deleteMessage(message)}
            style={{
                textAlign: position
            }}>
            {message.text}
        </div>
    );
}

export default Message;
