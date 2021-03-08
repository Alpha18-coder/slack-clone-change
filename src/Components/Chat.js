import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat({ user }) {

    let { channelId } = useParams(); //va a buscar la id a través de app.js y verá el url donde está el id (que esta definido en path)
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                setMessages(messages);
            })
    }

    const sendMessage = (text) => {
        if (channelId) {
            let payload = {
                text: text,
                user: user.name,
                timestamp: firebase.firestore.Timestamp.now(),
                userImage: user.photo,
            }

            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
            })
    }

    useEffect(() => {
        getMessages();
        getChannel();
    }, [channelId])

    return (
        <Container>
            <ChatHeader channel={channel} />

            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data) => (
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessageContainer>

            <ChatContainer id="chat">
                <ChatInput sendMessage={sendMessage} />
            </ChatContainer>
        </Container>
    )
}

export default Chat;

const Container = styled.div`
display:grid;
grid-template-rows: 10vh auto min-content;//min content significa que va a tomar el minimo espacio necesario.
min-height: 0;
overflow: hidden;

:hover {
    #chat {
        animation: rise 0.5s ease forwards;
    }
}

@keyframes rise {
    0%{}
    100%{transform: translateY(-400px)}
}

`

const MessageContainer = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
`

const ChatContainer = styled.div`
width: 100%;
bottom: -400px;
position: relative;
`