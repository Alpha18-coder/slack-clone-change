import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider) //this is a promise c:
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser)) //localstorage guarda datos desde el backend (eso hacen las cookies). el storage solo acepta strings y por eso usamos JSON.Stringify
            props.setUser(newUser);
        }) //gives the actual data
        .catch((error) => {
            alert(error.message)
        }) //catch se usa para ver si es que atrapa un error
    }

    return (
        <Container>
            <Content>
                <SlackImg src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack logo"/>
                <h1>Sign in Slack</h1>
                <SignInButton onClick={() =>signIn()}>
                    Sign In With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login;

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f8f8f8;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.div`
background-color: white;
padding: 100px;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
height: 100px;
margin-bottom: 20px;
`

const SignInButton = styled.button`
margin-top: 50px;
background-color: #0a8d48;
color: white;
border: none;
height: 40px;
border-radius: 4px;
font-size: 15px;
`
