// Importando o hook 'useState' da biblioteca 'react'
import { useState } from "react";
// Importando os componentes estilizados necessários do arquivo 'StyledMessageForm'
import { 
    MessageFormContainer, 
    SelectInput, 
    SendButton, 
    UserInput 
} from "./StyledMessageForm";

// Definindo o componente 'MessageForm' e recebendo a prop 'addMessage'
function MessageForm({ addMessage }) {
    // Definindo estados locais usando o hook 'useState'
    // 'text' guarda o conteúdo da mensagem, 'setText' atualiza esse estado
    // 'user' guarda o remetente, 'setUser' atualiza esse estado
    const [text, setText] = useState("");
    const [user, setUser] = useState("Eu");

    // Função chamada quando o botão de envio é clicado
    const onSendMessage = (event) => {
        event.preventDefault();

        // Verificando se o conteúdo da mensagem está vazio ou contém apenas espaços em branco
        if (text.trim() === "") {
            // Se a mensagem for vazia, retorna sem enviar a mensagem
            return;
        }
        
        // Criando um objeto 'message' com o remetente e o conteúdo da mensagem
        const message = {
            user,
            text
        };

        // Chamando a função 'addMessage' passada como prop para adicionar a mensagem
        addMessage(message);

        // Limpando o campo de texto após o envio da mensagem
        setText("");
    };

    // Retornando a estrutura JSX do formulário de mensagem
    return (
        <MessageFormContainer onSubmit={onSendMessage}>
            {/* Componente 'SelectInput' para selecionar o remetente */}
            <SelectInput 
                onChange={(e) => setUser(e.target.value)}
                type="text"
                value={user}
            >
                <option>Eu</option>
                <option>Turma</option>
            </SelectInput>

            {/* Componente 'UserInput' para digitar o conteúdo da mensagem */}
            <UserInput 
                onChange={(e) => setText(e.target.value)}
                placeholder="Mensagem"
                type="text"
                value={text}
            />

            {/* Botão de envio da mensagem */}
            <SendButton type="submit">Enviar</SendButton>
        </MessageFormContainer>
    );
}

// Exportando o componente 'MessageForm' para ser utilizado em outros arquivos
export default MessageForm;