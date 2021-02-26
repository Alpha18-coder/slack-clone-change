import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import db from './firebase';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, provider } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))); //parse turns a string into a object

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() =>{
      localStorage.removeItem('user'); //remove the saved data
      setUser(null); //remove the user
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  //useEffect sirve para controlar los efectos colaterales de un estado o función (creo)

  return (
    <div className="App">
      <Router >
        {
          !user ?
            <Login setUser={setUser} />
            :
            <Container>
              <Header signOut={signOut} user={user}/>
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId"> 
                    <Chat />
                  </Route>
                  <Route path="/">
                    Select or Create Channel
                  </Route>
                </Switch>
              </Main>
            </Container>
        }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 50px auto; 
`

/*auto toma el resto del espacio restante*/

const Main = styled.div`
display: grid;
grid-template-columns: 280px auto;
`



