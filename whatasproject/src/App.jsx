import React from 'react';
import GlobalStyle from './GlobalStyled'; // Importando os estilos globais
import Chat from './components/Chat'; // Importando o componente Chat

// Componente principal do aplicativo
function App() {
    // Retornando a estrutura JSX do aplicativo
    return (
        <>
            {/* Estilos globais aplicados a todo o aplicativo */}
            <GlobalStyle />
            {/* Componente de chat para exibição de mensagens */}
            <Chat />
        </>
    );
}

// Exportando o componente 'App' para ser utilizado em outros arquivos
export default App;
