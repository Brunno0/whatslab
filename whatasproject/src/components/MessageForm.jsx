import { useState } from "react"
import { MessageFormContainer, SelectInput, SendButton, UserInput } from "./StyledMessageForm"


function MessageForm({addMessage}) {
    const [text, setText] = useState("")
    const [user, setUser] = useState("Eu")

    const date =()=>{
        const hours = new Date().getHours()
        const minuts = new Date().getMinutes()
        return `${hours}:${minuts}`
    }

    const onChangeText = (event) => {
        setText(event.target.value)
        console.log(event.target.value)
    }

     const onChangeUser = (event) =>{
        event.preventDefault();
        setUser(event.target.value)
        console.log(event.target.value)
    }

    const onSendMessage =(event)=>{
        event.preventDefault();

        const message = {
            user,
            text,
            hours: date()
        }
        addMessage(message)
        console.log(message)
        setText("")
        
    }


    return (
  
    <MessageFormContainer onSubmit={onSendMessage}>
        <SelectInput 
            onChange={onChangeUser}
            type="text"
            value={user}>
            <option>Eu</option>
            <option>Turma</option>
        </SelectInput>

        <UserInput 
            onChange={onChangeText}
            placeholder="Messagem"
            type="text"
            value={text}
        ></UserInput >

        <SendButton>Enviar</SendButton>

        </MessageFormContainer>
    
    )

}

export default MessageForm