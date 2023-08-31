import { createGlobalStyle } from "styled-components";

// Criação de estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 20px; /* Espaçamento superior */
    padding: 0; /* Removendo padding padrão do body */
    font-family: Open-Sans, Helvetica, Sans-Serif; /* Fonte padrão */
    background-color: #111B21; /* Cor de fundo global */
  }
`;

export default GlobalStyle; // Exportando os estilos globais
