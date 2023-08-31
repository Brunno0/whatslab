import styled from "styled-components";

// Componente estilizado para o container principal do aplicativo
export const AppContainer = styled.div`
    margin: 0 auto; 
    width: 50vw; 
    height: 90vh; 
    background: url("https://i.pinimg.com/236x/39/e7/74/39e774d1313eae280b1838910419f456.jpg"); /* Imagem de fundo */
    display: flex;
    flex-direction: column; 
    overflow-y: auto; 
    max-width: 600px; 
`;

// Componente estilizado para o container de mensagens
export const MessagesContainer = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-end; 
    padding: 20px; 
    position: sticky; 
    bottom: 0; 
`;
