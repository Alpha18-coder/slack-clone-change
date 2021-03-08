import React from 'react';
import styled from "styled-components";

function CreateChannel() {
    return (
        <Container>
            <Content>
                <SlackImg src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack logo" />
                <h1>Slack Clone</h1>
                <h2>Create a Channel</h2>
            </Content>
        </Container>
    )
}

export default CreateChannel;

const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v748-toon-106_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=af38437b7941dbdaa625d8cf5802f9eb");
background-repeat: no-repeat;
background-size: 200vh;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.div`
background: transparent;
padding: 100px;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
    padding: 50px 0px;
    font-size: 3rem;
}
`

const SlackImg = styled.img`
height: 10rem;
margin-bottom: 20px;
`

