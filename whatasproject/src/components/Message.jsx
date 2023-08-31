import React from 'react';
import { MessageBox, MessageContainer } from "./StyledMessage";

function Message({ message, deleteMessage }) {
    const position = message.user === "Eu" ? "right" : "left";

    return (
        <MessageContainer onDoubleClick={() => deleteMessage(message)}>
            <MessageBox position={position}>
                {message.text}
            </MessageBox>
        </MessageContainer>
    );
}

export default Message;
