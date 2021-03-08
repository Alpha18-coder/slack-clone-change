import { sidebarItemsData } from '../data/SidebarData'; //los dos puntos sirven para salir afuera de la carpeta actual (components) y buscar en src
import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import db from '../firebase';
import { useHistory } from "react-router-dom";

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`); //el link de cada room identificado por su id
        }
    }


    const addChannel = () => {
        const promptName = prompt("Entrale tu nombre de la wea al canal");
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    aCleverProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                        ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                               # {item.name}
                           </Channel>
                        ))
                    }

                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
background: #2536a0; /* fallback for old browsers */
background: -webkit-linear-gradient(to left,#ba00e8,#2536a0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left,#ba00e8,#2536a0);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
z-index: 3;
`
const WorkSpaceContainer = styled.div`
height: 65px;
display: flex;
align-items: center;
padding-left: 19px;
justify-content: space-between;
border-bottom: 1px solid #532753;
`

const Name= styled.div`
color: white;
`

const NewMessage = styled.div`
width: 36px;
height: 36px;
background: white;
fill: #3F0E40;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 20px;
cursor: pointer;
`

const MainChannels = styled.div`
padding-top: 20px;

`

const MainChannelItem = styled.div`
color: rgb(188,171,188);
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover {
    color: white;
    font-weight: bold;
    background: linear-gradient(to left,#6e008a,#1d32b5);
}
`

const ChannelsContainer = styled.div`
color: rgb(188,171,188);
margin-top: 10px;

`

const NewChannelContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 28px;
padding-left: 19px;
padding: right: 12px;
.MuiSvgIcon-root {
    cursor: pointer;
    :hover{
        color: white;
    }
}
`

const ChannelsList = styled.div`

`
const Channel = styled.div`
height: 28px;
display: flex;
align-items: center;
cursor: pointer;
padding-left: 19px;
:hover {
    color: white;
    font-weight: bold;
    background: linear-gradient(to left,#6e008a,#1d32b5);
}
`
