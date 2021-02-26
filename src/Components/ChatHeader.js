import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "../firebase";


function ChatHeader({channelId}) {

     //va a buscar la id a través de app.js y verá el url donde está el id (que esta definido en path) 
    const [ channel, setChannel ] = useState();
    
    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            console.log(snapshot.data());//setChannel(snapshot.data());
        })
     }
    
    useEffect(() => {
        getChannel();
    }, [channelId]) //esto un listener de los cambios de id c: (ES IMPORTANTE)
    
    getChannel();

    return (
        <Container>
            <HeaderSection>
                <ChannelContainer>
                    <ChannelName>
                        #  { channel && channel.name}
                        <StarBorderOutlinedIcon />
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work based matters (?)
                    </ChannelInfo>
                </ChannelContainer>

                <DetailsContainer>
                    <DetailsText>
                        Details
                    </DetailsText>
                    <InfoOutlinedIcon />
                </DetailsContainer>
            </HeaderSection>
        </Container>
    )
}

export default ChatHeader;

const Container = styled.div`

`

const HeaderSection = styled.div`
width:auto;
display: flex;
justify-content: space-between;
padding: 15px;
box-shadow: 0 1px 3px 3px lightgray;
z-index: -1;
border-radius: 6px;

`

const ChannelContainer = styled.div`
display: flex;
flex-direction: column;
`

const ChannelName = styled.div`
display: flex;
font-weight: 500;
align-items: center;

.MuiSvgIcon-root:hover{
    color: purple;
}
`
const ChannelInfo = styled.div`
font-weight: 400;
color: #606060;
font-size: 13px;
margin-top: 8px;
`

const DetailsContainer = styled.div`
display: flex;
align-items: center;
`

const DetailsText = styled.div`
padding-right: 5px;
`
