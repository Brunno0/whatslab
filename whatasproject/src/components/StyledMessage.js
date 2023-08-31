import styled from "styled-components";

export const MessageContainer = styled.div`
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`;

export const MessageBox = styled.div`
    border-radius: 10px;
    background-color: white;
    max-width: 40%;
    padding: 10px 15px;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
    text-align: ${(props) => props.position}; 
    align-self: ${(props) => {
        if (props.position === "right") {
            return "flex-end";
        } else {
            return "flex-start";
        }
    }};
    background-color: ${(props) => {
        if (props.position === "right") {
            return "#dcf8c6";
        } else {
            return "#ffffff";
        }
    }};
`;

export const UserMessage = styled.div`
    margin-bottom: 10px;
    font-weight: bold;
`;
