import styled from "styled-components";

export const MessageContainer = styled.div`
     margin: 10px 0;
     display: flex;
     flex-direction: column;
`;

export const MessageBox = styled.div`
    background-color: white;
    max-width: 40%;
    padding: 10px 15px;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;

    // o alinhamento do texto div vai depender da props
    text-align: ${(props) => props.position};
    // 
    align-self: ${(props) => {
        if (props.position === "right") {
        return "flex-end";
        } else {
        return "flex-start";
        }
        }};


`;

export const UserInput = styled.input`
   
`;

export const SendButton = styled.button`
    

`;
