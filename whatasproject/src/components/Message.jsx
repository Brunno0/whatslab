import { useState } from "react"


function Message({message, deleteMessage}) {
   
    return (<>
        <div onDoubleClick={()=>deleteMessage(message)}>
        <p>{message.user}</p>
        <p>{message.text}</p>
        <p>{message.hours}</p>
        </div>
        </>
    )

}

export default Message