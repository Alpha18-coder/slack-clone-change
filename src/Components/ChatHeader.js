import React from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function ChatHeader({channel}) {

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
width: auto;
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
