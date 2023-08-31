// Importando as dependências necessárias do React e componentes personalizados
import React, { useState } from 'react';
import MessageForm from './MessageForm';
import Message from './Message';
import GlobalStyle from '../GlobalStyled';
import { AppContainer, MessagesContainer } from '../AppStyled';

// Definindo o componente funcional 'Chat'
function Chat() {
    // Definindo o estado local 'messages' para armazenar as mensagens
    const [messages, setMessages] = useState([]);

    // Função para adicionar uma nova mensagem ao estado 'messages'
    const addMessage = (message) => {
        const updatedMessages = [...messages, message];
        setMessages(updatedMessages);
    };

    // Função para excluir uma mensagem do estado 'messages'
    const deleteMessage = (message) => {
        const updatedMessages = messages.filter((msg) => msg !== message);
        setMessages(updatedMessages);
    };

    // Mapeando as mensagens para o componente 'Message' e criando uma lista de elementos
    const messagesMap = messages.map((message) => (
        <Message key={message.text} message={message} deleteMessage={deleteMessage} />
    ));

    // Retornando a estrutura JSX do componente 'Chat'
    return (
        <>
            {/* Container principal do aplicativo */}
            <AppContainer>
                {/* Estilos globais */}
                <GlobalStyle />
                {/* Container para exibir as mensagens */}
                <MessagesContainer>{messagesMap}</MessagesContainer>
                {/* Componente do formulário de mensagem */}
                <MessageForm addMessage={addMessage} />
            </AppContainer>
        </>
    );
}

// Exportando o componente 'Chat' para ser utilizado em outros arquivos
export default Chat;
