import './App.css';
import React from 'react'
import {Nav, Navbar, Container,Card,Button, Tab,Tabs} from 'react-bootstrap'
import img from './images/logo.png'
import room1 from './images/room1.jpg'
import room2 from './images/room2.jpg'
import room3 from './images/room3.jpg'
import room4 from './images/room4.jpg'
import videoBg from './videos/mainBg.mp4'
import { useState } from 'react';
import SingleRoom from './components/SingleRoom';
import StandardRoom from './components/StandardRoom'
import DeluxeRoom from './components/DeluxRoom'
import SuiteRoom from './components/SuiteRoom';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'




function App() {
  let navigate = useNavigate()
  let [rooms,setRooms] = useState([
    {
      id:'room001',
      itemName:'SingleRoom',
      content:'미정',
      price:'50,000',
      imgPath:{room1}
    },
    {
      id:'room002',
      itemName:'StandardRoom',
      content:'미정',
      price:'70,000',
      imgPath:{room2}
    },
    {
      id:'room003',
      itemName:'DeluxeRoom',
      content:'미정',
      price:'10,0000',
      imgPath:{room3}
    },
    {
      id:'room004',
      itemName:'SuiteRoom',
      content:'미정',
      price:'15,0000',
      imgPath:{room4}
    }
  ])



  return (
    <div className="App">
      
      <Navbar  className='Menu'>
        <Container >
            <img src={img} width='200px' height={'100px'} style={{opacity: '0.85'}} onClick={()=>{navigate('/')}}></img>
            <Nav >
            <Nav.Link href="#ROOMS" onClick={()=>{navigate()}}>ROOMS</Nav.Link>
            <Nav.Link href="#FACILITIES">FACILITIES</Nav.Link>
            <Nav.Link href="#DINING&BAR">DINING&BAR</Nav.Link>
            <Nav.Link href="ABOUT">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className='main'>
      <video src={videoBg} autoPlay loop muted  />
      <div className='content'>
        <p className='hotelTitle'>Hotel Yogiya</p>
        <Button variant="outline-light" style={{fontSize:'24px'}}>SEARCH</Button>{' '}
      </div>
      
      


      </div>

      <div className='rooms'>
        <p><h1>Rooms</h1></p>
        
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill style={{fontSize:'28px'}}>

      <Tab eventKey="SingleRoom" title="SingleRoom">
        <SingleRoom/>
      </Tab>
      <Tab eventKey="StandardRoom" title="StandardRoom">
        <StandardRoom/>
      </Tab>
      <Tab eventKey="DeluxeRoom" title="DeluxeRoom">
        <DeluxeRoom/>
      </Tab>
      <Tab eventKey="SuiteRoom" title="SuiteRoom">
        <SuiteRoom/>
      </Tab>
    </Tabs>

      </div>

      <div className='footer'>
        <h2>여기는 footer</h2>
      </div>






    </div>
  );
}

export default App;
