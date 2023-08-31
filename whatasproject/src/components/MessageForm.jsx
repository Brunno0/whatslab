import { useState } from "react";
import { 
    MessageFormContainer, 
    SelectInput, 
    SendButton, 
    UserInput 
} from "./StyledMessageForm";

function MessageForm({ addMessage }) {
    const [text, setText] = useState("");
    const [user, setUser] = useState("Eu");

    const onSendMessage = (event) => {
        event.preventDefault();

        if (text.trim() === "") {
            return;
        }
        
        const message = {
            user,
            text
        };
        addMessage(message);
        setText("");
    };

    return (
        <MessageFormContainer onSubmit={onSendMessage}>
            <SelectInput 
                onChange={(e) => setUser(e.target.value)}
                type="text"
                value={user}
            >
                <option>Eu</option>
                <option>Turma</option>
            </SelectInput>

            <UserInput 
                onChange={(e) => setText(e.target.value)}
                placeholder="Mensagem"
                type="text"
                value={text}
            />

            <SendButton type="submit">Enviar</SendButton>
        </MessageFormContainer>
    );
}

export default MessageForm;
