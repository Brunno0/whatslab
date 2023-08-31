import React, { useState } from "react";

function MessageForm({ addMessage }) {
    const [text, setText] = useState("");
    const [user, setUser] = useState("Eu");

    const onSendMessage = (event) => {
        event.preventDefault();
            
        const message = {
            user,
            text
        };

        addMessage(message);
        setText("");
    };

    return (
        <form onSubmit={onSendMessage}>
            <select onChange={(e) => setUser(e.target.value)} value={user}>
                <option>Eu</option>
                <option>Turma</option>
            </select>

            <input 
            onChange={(e) => setText(e.target.value)}
             placeholder="Mensagem" 
             type="text" 
             value={text} />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default MessageForm;
