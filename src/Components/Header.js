import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';



function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="" />
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                        <SearchOutlinedIcon />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut} >
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6YBx3io.png"} alt="" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header;

const Container = styled.div`
background: linear-gradient(to top,#ba00e8,#2536a0);
color: white;
display: flex;
align-items: center;
position: relative;
padding: 25px;
z-index: 100;
box-shadow: 0 1px 0 0 rgb(255 255 255/ 10%);
`

const Main = styled.div`
display: flex;
margin-right: 16px;
margin-left: 16px;
align-items: center;
img {
    width: 35px;
    height: 35px;
    margin-right: 20px;
}
`

const SearchContainer = styled.div`
min-width: 400px;
margin-left: 16px;
margin-right: 16px;
`

const Search = styled.div`
width: 100%;
box-shadow: inset 0px 0px 0 1.5px lightgray;
border-radius: 28px;
display: flex; 
align-items: center;
justify-content: space-between;
input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
}

.MuiSvgIcon-root {
    display: flex;
    align-items: center;
    padding-right: 5px;
    border-left: 2px solid lightgray;
    padding: 0px 10px;
}
`

const UserContainer = styled.div`
display: flex;
align-items: center;
padding-right: 16px;
position: absolute;
right: 0;
`

const Name = styled.div`
padding-right: 16px;
`

const UserImage = styled.div`
width: 28px;
height: 28px;
border: 2px solid white;
border-radius: 3px;
cursor: pointer;
img {
    width: 100%;
}
`