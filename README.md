# WhatsLab - Projeto Live

## Projeto WhatsLab 🚀

Bem-vindo ao projeto **WhatsLab**! Aqui, vamos criar um aplicativo de troca de mensagens incrível que pode competir com os gigantes do mercado. Vamos seguir um passo a passo para garantir que tenhamos um *MVP* sólido.

## Passo a Passo 📝

1. **Clonar o Repositório 📂:**
   Comece clonando o repositório fornecido. O ambiente de desenvolvimento já está configurado para você. Isso dará o pontapé inicial no projeto.

2. **Leitura das Instruções 📖:**
   Antes de mergulhar no código, leia atentamente as instruções fornecidas. Elas vão guiar nossos objetivos e as funcionalidades que precisamos implementar.

3. **Implementação das Funcionalidades 💻**

    **Componente `Message` (Lista de Mensagens)**
    
    - Implemente o componente funcional **`Message`**, que irá receber a prop **`message`** contendo os dados da mensagem.
    - No componente **`Message`**, defina a estrutura JSX para exibir a mensagem, incluindo o remetente e o conteúdo.
    - Utilize a estrutura **`<MessageContainer>`** para envolver o conteúdo da mensagem.
    - No componente **`Chat`**, mapeie a lista de mensagens (**`messages`**) e renderize um elemento **`Message`** para cada mensagem, passando a prop **`message`** para o componente.
    
    **2. Componente `MessageForm` (Envio de Mensagem)**
    
    - Implemente o componente funcional **`MessageForm`**, que irá receber a prop **`addMessage`**.
    - No componente **`MessageForm`**, crie campos de entrada para o remetente e o conteúdo da mensagem, além de um botão de envio.
    - Defina os estados locais **`text`** e **`user`** utilizando o hook **`useState`** para guardar o conteúdo da mensagem e o remetente.
    - Implemente a função **`onSendMessage`** que será chamada ao enviar a mensagem. Ela deve adicionar a mensagem à lista de mensagens usando a função **`addMessage`** passada como prop e redefinir os campos de entrada.
    - Passe a prop **`addMessage`** para o componente **`MessageForm`** no componente **`Chat`**.
    
    **3. Estilização dos Balões de Chat**
    
    - No arquivo **`StyledMessage`**, implemente os estilos para os componentes **`MessageContainer`**, **`MessageBox`** e **`UserMessage`**.
    - Utilize as props **`position`** para posicionar corretamente os balões de mensagem na direita ou na esquerda, e para definir a cor de fundo apropriada.
    - Certifique-se de que a formatação dos balões siga o design desejado, com a cor, tamanho e sombra corretos.

Com os componentes já criados, esses passos são mais voltados para verificar e ajustar a funcionalidade e a aparência dos componentes existentes. Certifique-se de testar cada funcionalidade para garantir que elas estejam operando conforme o esperado.

Lembre-se de que, embora os componentes estejam prontos, a integração e os ajustes finos podem levar tempo. E, claro, de se divertir enquanto trabalha!  🚀
