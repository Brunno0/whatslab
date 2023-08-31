import styled from "styled-components";

// Componente estilizado para o formulário de mensagem
export const MessageFormContainer = styled.form`
    display: flex;
    justify-content: space-between; 
    margin: 5vh;
    height: 30px;
`;

// Componente estilizado para a caixa de seleção de usuário
export const SelectInput = styled.select`
    border-radius: 5px; 
    width: 20%;
    font-size: 14px; 
    border: none; 
`;

// Componente estilizado para a entrada de texto do usuário
export const UserInput = styled.input`
    width: 60%; 
    border-radius: 5px; 
    font-size: 14px; 
    border: none; 
    padding: 10px; 
`;

// Componente estilizado para o botão de envio
export const SendButton = styled.button`
    border-radius: 5px; 
    font-size: 14px; 
    border: none;
    padding: 5px; 
`;
