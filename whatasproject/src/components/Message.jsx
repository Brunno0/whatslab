import { useState } from "react"
import { MessageBox, MessageContainer } from "./StyledMessage"


function Message({message, deleteMessage}) {
   
    return (<>
        <MessageContainer onDoubleClick={()=>deleteMessage(message)}>
           
           <MessageBox position={"left"}> 
            <p>{message.user}</p>
            <p>{message.text}</p>
            <p>{message.hours}</p>
            </MessageBox>
        </MessageContainer>
        </>
    )

}

export default Message