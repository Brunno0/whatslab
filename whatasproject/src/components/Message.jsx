// Importando os componentes necessários do arquivo 'StyledMessage'
import { MessageBox, MessageContainer } from "./StyledMessage";

// Definindo o componente funcional 'Message' que exibe uma mensagem na tela
function Message({ message, deleteMessage }) {
    // Determinando a posição da mensagem no container (direita ou esquerda) com base no remetente
    const position = message.user === "Eu" ? "right" : "left";

    // Retornando a estrutura JSX que representa uma mensagem
    return (
        <MessageContainer onDoubleClick={() => deleteMessage(message)}>
            {/* Componente 'MessageBox' que exibe o conteúdo da mensagem com base na posição */}
            <MessageBox position={position}>
                {/* Exibindo o texto da mensagem */}
                {message.text}
            </MessageBox>
        </MessageContainer>
    );
}

// Exportando o componente 'Message' para ser utilizado em outros arquivos
export default Message;
