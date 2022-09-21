import './App.css';
import React from 'react'
import {Nav, Navbar, Container,Card,Button, Tab,Tabs} from 'react-bootstrap'
import videoBg from './videos/mainBg.mp4'
import { useState, useEffect} from 'react';
import Footer from './components/Footer'
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import DiningBar from './components/DiningBar';
import AboutHotel from './components/AboutHotel';
import {useRef} from 'react'
import img from './images/logo.png'



function App() {
  let [navBar,setNavBar] = useState(false)

  const main = useRef(null)
  const rooms = useRef(null)
  const facilities = useRef(null)
  const diningBar = useRef(null)
  const about = useRef(null)



  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }



  const [scrollToTop,setScrollToTop] =useState(false)

  useEffect(()=>{
      window.addEventListener('scroll',()=>{

          if(window.scrollY > 115) {
              setScrollToTop(true)
          }else{
              setScrollToTop(false)
          }
      })
  },[])








  return (
    <div className="App">
      <div ref={main} className='navBar'>
      <header >
        <img  src={img} width='200px' height={'100px'} 
          style={{opacity: '0.85',cursor:'pointer'}} onClick={()=>scrollToSection(main)} ></img>
        <nav >
          <ul>
            <li className='roomsLi' onClick={()=>scrollToSection(rooms)}>ROOMS</li>
            <li className='facilitiesLi' onClick={()=>scrollToSection(facilities)}>FECILITIES</li>
            <li className='diningBarLi' onClick={()=>scrollToSection(diningBar)}>DIDING&BAR</li>
            <li className='aboutLi' onClick={()=>scrollToSection(about)}>ABOUT</li>
          </ul>
        </nav>
      </header>
      </div>

      <div className='main'>
      <video src={videoBg} autoPlay loop muted  />
      <div className='content'>
        <p className='hotelTitle'>Hotel Yogiya</p>
        <Button variant="outline-light" style={{fontSize:'24px'}} onClick={()=>scrollToSection(rooms)} >SEARCH</Button>{' '}
      </div>
      </div>


      <div ref={rooms}>
        <div className='roomsNav'>
          <p>Rooms</p>
        </div>
        <Rooms/>
      </div>

      <div ref={facilities}>
          <div className='facilitiesNav'>
              <p>Facilities</p>
          </div>
          <div className='facilities'>  
              <Facilities/>
          </div>
      </div>
      
      <div ref={diningBar}>
        <div className='dinigBarNav'>
            <p>Dining&Bar</p>
        </div>
        <DiningBar/>
      </div>
      
        <div ref={about}>
          <div className='aboutHotelNav'>
            <p>About Hotel Yogiya</p>
          </div>
          <AboutHotel/>
        </div>

        <div>
        <Footer/>
        </div>

        <div>
        {scrollToTop && (
            <div style={{
              position:'fixed',
              top:'0px',
              height:'76px',
              width:'100%',
              fontSize:'22px',
              backgroundColor:'white',
              borderBottom:'1px solid black',
            }}>
              <div className='underNav' style={{cursor:'pointer'}}>
              <span onClick={()=>scrollToSection(main)} style={{fontSize:'34px'}}>
                <p style={{fontSize:'12px',margin:'0',textAlign:'center'}}>HOTEL</p>YOGIYA</span>
              <span onClick={()=>scrollToSection(rooms)}>ROOMS</span>
              <span onClick={()=>scrollToSection(facilities)}>FECILITIES</span>
              <span onClick={()=>scrollToSection(diningBar)}>DINING&BAR</span>
              <span onClick={()=>scrollToSection(about)}>ABOUT</span>
              </div>
            </div>
        )}
        </div>
        
        


    </div>





  );
}

export default App;
