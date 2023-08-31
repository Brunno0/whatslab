import { useState } from 'react'
import MessageForm from './components/MessageForm'
import Message from './components/Message'


function App() {

  const [ messages, setMessages] = useState([])

  const addMessage = (message) =>{
    const listMessage = [...messages, message]
    setMessages(listMessage)
  }

  const deleteMessage =(message)=>{
    const listMessage = messages.filter((msg)=>{
      return msg != message
    })
    setMessages(listMessage)

  }
  const messagesMap = messages.map((message)=>{
    return <Message message={message} deleteMessage={deleteMessage}/>

  })

  return (
    <>
      {messagesMap? messagesMap : "loading"}
      <MessageForm addMessage={addMessage}/>
    </>
  )
}

export default App
