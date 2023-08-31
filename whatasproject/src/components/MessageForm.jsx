import { useState } from "react"


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


    return (<>

    <form onSubmit={onSendMessage}>
        <select 
            onChange={onChangeUser}
            type="text"
            value={user}>
            <option>Eu</option>
            <option>Turma</option>
        </select>

        <input 
            onChange={onChangeText}
            placeholder="Messagem"
            type="text"
            value={text}
        ></input>

        <button>Enviar</button>

        </form>
    </>
    )

}

export default MessageForm