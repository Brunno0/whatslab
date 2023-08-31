import styled from "styled-components";

// Componente estilizado para o formulário de mensagem
export const MessageFormContainer = styled.form`
    display: flex; /* Exibir os elementos do formulário em uma linha */
    justify-content: space-between; /* Espaço uniformemente entre os elementos */
    margin: 5vh; /* Margem vertical */
    height: 30px; /* Altura do formulário */
`;

// Componente estilizado para a caixa de seleção de usuário
export const SelectInput = styled.select`
    border-radius: 5px; /* Borda arredondada */
    width: 20%; /* Largura da caixa de seleção */
    font-size: 14px; /* Tamanho da fonte */
    border: none; /* Sem borda */
`;

// Componente estilizado para a entrada de texto do usuário
export const UserInput = styled.input`
    width: 60%; /* Largura da entrada de texto */
    border-radius: 5px; /* Borda arredondada */
    font-size: 14px; /* Tamanho da fonte */
    border: none; /* Sem borda */
    padding: 10px; /* Espaçamento interno */
`;

// Componente estilizado para o botão de envio
export const SendButton = styled.button`
    border-radius: 5px; /* Borda arredondada */
    font-size: 14px; /* Tamanho da fonte */
    border: none; /* Sem borda */
    padding: 5px; /* Espaçamento interno */
`;
