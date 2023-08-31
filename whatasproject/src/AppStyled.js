import styled from "styled-components";

// Componente estilizado para o container principal do aplicativo
export const AppContainer = styled.div`
    margin: 0 auto; /* Margem automática nas laterais */
    width: 50vw; /* Largura máxima do container (50% da largura da viewport) */
    height: 90vh; /* Altura do container (90% da altura da viewport) */
    background: url("https://i.pinimg.com/236x/39/e7/74/39e774d1313eae280b1838910419f456.jpg"); /* Imagem de fundo */
    display: flex; /* Exibir os elementos em uma linha */
    flex-direction: column; /* Alinhar os elementos verticalmente */
    overflow-y: auto; /* Adicionar rolagem vertical quando necessário */
    max-width: 600px; /* Largura máxima do container (evitar que fique muito largo) */
`;

// Componente estilizado para o container de mensagens
export const MessagesContainer = styled.div`
    flex: 1; /* Ocupar todo o espaço disponível verticalmente */
    display: flex; /* Exibir os elementos em uma linha */
    flex-direction: column; /* Alinhar os elementos verticalmente */
    justify-content: flex-end; /* Alinhar as mensagens na parte inferior do container */
    padding: 20px; /* Espaçamento interno */
    position: sticky; /* Manter o container grudado na parte inferior enquanto há espaço */
    bottom: 0; /* Fixar o container na parte inferior */
`;
