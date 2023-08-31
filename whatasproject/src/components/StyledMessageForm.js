import styled from "styled-components";
//precisamos de um container
export const MessageFormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 5vh;
    height: 30px;
   
`;

export const SelectInput = styled.select`
    border-radius:5px;
    width: 20%;
    font-size: 14px;
    border: none;
`;

export const UserInput = styled.input`
    width: 60%;
    border-radius:5px;
    font-size: 14px;
    border: none;
    padding: 10px;
 
`;

export const SendButton = styled.button`
    border-radius:5px;
    font-size: 14px;
    border: none;
    padding: 5px;

`;
