import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if (!input) return; //abortar mision (?)
        sendMessage(input);
        setInput("");
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        value={input}
                        placeholder="Message here..." />
                    <SendButton
                        type="submit"
                        onClick={send}>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div`
padding-left: 20px;
padding-right: 20px; 
padding-bottom: 24px;
background: white;
position: relative;
`

const InputContainer = styled.div`
border: 3px solid purple;
border-radius: 50px;
form {
    display: flex;
    height: 42px;
    align-items: center; 
    padding-left: 10px;
    input {
        flex: 1; //esto significa que va a ser el componente mas importante y por ende tomará tanto espacio como pueda
        border: none;
        font-size: 13px; 
    }
    input:focus{
        outline: none;
    }


}
`

const SendButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 2px;
width: 32px;
height: 32px;
margin-right: 5px;

.MuiSvgIcon-root{
    width: 58px;
}
`

const Send = styled(SendIcon)`

:hover{
    color: purple;
}
`

//esto se debe a por el icono para poder editarlo ozi