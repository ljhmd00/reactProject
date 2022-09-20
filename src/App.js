import './App.css';
import React from 'react'
import {Nav, Navbar, Container,Card,Button, Tab,Tabs} from 'react-bootstrap'
import videoBg from './videos/mainBg.mp4'
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Footer from './components/Footer'
import {Link} from 'react-scroll' 
import NavBar from './components/NavBar'
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import DiningBar from './components/DiningBar';
import AboutHotel from './components/AboutHotel';




function App() {
  let navigate = useNavigate()




  return (
    <div className="App">
      <NavBar/>

      <div className='main'>
      <video src={videoBg} autoPlay loop muted  />
      <div className='content'>
        <p className='hotelTitle'>Hotel Yogiya</p>
        <Button variant="outline-light" style={{fontSize:'24px'}} onClick={()=>{navigate('/')}} >SEARCH</Button>{' '}
      </div>
      </div>


      <div>
        <div className='roomsNav'>
          <p>Rooms</p>
        </div>
        <Rooms/>
      </div>

      <div>
          <div className='facilitiesNav'>
              <p>Facilities</p>
          </div>
          <div className='facilities'>  
              <Facilities/>
          </div>
      </div>
      
      <div>
        <div className='dinigBarNav'>
            <p>Dining&Bar</p>
        </div>
        <DiningBar/>
      </div>
      
        <div>
          <div className='aboutHotelNav'>
            <p>About Hotel Yogiya</p>
          </div>
          <AboutHotel/>
        </div>

        <div>
        <Footer/>
        </div>



    </div>





  );
}

export default App;
