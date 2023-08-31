import styled from "styled-components";

// Componente estilizado para o container de mensagem
export const MessageContainer = styled.div`
    margin: 5px 0; /* Margem vertical entre mensagens */
    display: flex; /* Exibir as mensagens em uma linha */
    flex-direction: column; /* Alinhar verticalmente as mensagens */
    border-radius: 5px; /* Borda arredondada */
`;

// Componente estilizado para a caixa de mensagem
export const MessageBox = styled.div`
    border-radius: 10px; /* Borda arredondada da caixa de mensagem */
    background-color: white; /* Cor de fundo padrão */
    max-width: 40%; /* Largura máxima da caixa de mensagem */
    padding: 10px 15px; /* Espaçamento interno */
    height: 100%; /* Altura da caixa de mensagem */
    margin: 10px; /* Margem externa da caixa de mensagem */
    display: flex; /* Exibir elementos em uma linha */
    flex-direction: column; /* Alinhar verticalmente os elementos na caixa */
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13); /* Sombra na caixa de mensagem */

    /* Alinhamento horizontal do texto, dependendo da prop 'position' */
    text-align: ${(props) => props.position}; 
    /* Alinhamento vertical do elemento, dependendo da prop 'position' */
    align-self: ${(props) => {
        if (props.position === "right") {
            return "flex-end"; // Alinha à direita
        } else {
            return "flex-start"; // Alinha à esquerda
        }
    }};
    /* Cor de fundo da caixa de mensagem, dependendo da prop 'position' */
    background-color: ${(props) => {
        if (props.position === "right") {
            return "#dcf8c6"; // Cor de fundo para mensagens do remetente 'Eu'
        } else {
            return "#ffffff"; // Cor de fundo para mensagens de outros remetentes
        }
    }};
`;

// Componente estilizado para a mensagem do usuário
export const UserMessage = styled.div`
    margin-bottom: 10px; /* Espaçamento inferior da mensagem do usuário */
    font-weight: bold; /* Estilo de fonte em negrito */
`;
