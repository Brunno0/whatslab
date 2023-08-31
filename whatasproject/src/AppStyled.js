import styled from "styled-components"

export const AppContainer = styled.div`
margin: 0 auto;
width: 50vw;
height: 90vh;
background: url("https://i.pinimg.com/236x/39/e7/74/39e774d1313eae280b1838910419f456.jpg");
display: flex;
flex-direction: column;
overflow-y: auto;
max-width: 600px;
`
export const MessagesContainer = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  position: sticky;
  bottom: 0;
`