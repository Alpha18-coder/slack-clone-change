import React, { useState } from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from "../firebase";
import { useParams } from "react-router-dom";

function Chat() {

    let { channelId } = useParams(); //va a buscar la id a través de app.js y verá el url donde está el id (que esta definido en path) 
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>{
             let messages = snapshot.docsmap(() => {
                 console.log(messages);
                 setMessages(messages);
             })
        })
    }

    return (
        <Container>
            <ChatWrapper>
                <ChatHeader channelId = {channelId} />

                <MessageContainer>
                   {
                    messages.length > 0 &&
                    messages.map((data, index) => {
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    })
                   }               
                </MessageContainer>
            </ChatWrapper>
            <ChatInput />
        </Container>
    )
}

export default Chat;

const Container = styled.div`
display:grid;
grid-template-rows: 85vh min-content;
`
const ChatWrapper = styled.div`
width: auto;
`

const MessageContainer = styled.div`
`

//min content significa que va a tomar el minimo espacio necesario.

