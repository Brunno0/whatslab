import { useState } from 'react'
import MessageForm from './components/MessageForm'
import Message from './components/Message'
import GlobalStyle from './GlobalStyled'
import { AppContainer, MessagesContainer } from './AppStyled'


function App() {

  const [messages, setMessages] = useState([])

  const addMessage = (message) => {
    const listMessage = [...messages, message]
    setMessages(listMessage)
  }

  const deleteMessage = (message) => {
    const listMessage = messages.filter((msg) => {
      return msg != message
    })
    setMessages(listMessage)

  }
  const messagesMap = messages.map((message) => {
    return <Message message={message} deleteMessage={deleteMessage} />

  })

  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <MessagesContainer>{messagesMap}</MessagesContainer>
        <MessageForm addMessage={addMessage} />
      </AppContainer>
    </>
  )
}

export default App
