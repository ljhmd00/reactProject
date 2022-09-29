import './App.css';
import React from 'react'
import { Button} from 'react-bootstrap'
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
    <div className="App" path={'/'}>

      <div className='navBar' ref={main}>
        <div className='navbarLogo'>
          <img  src={img} width='220px' style={{opacity: '0.85',cursor:'pointer'}} onClick={()=>scrollToSection(main)}/>
        </div>

        <div className='navbarMenu'>`
          <li onClick={()=>scrollToSection(rooms)}>ROOMS</li>
          <li onClick={()=>scrollToSection(facilities)}>FECILITIES</li>
          <li onClick={()=>scrollToSection(diningBar)}>DIDING&BAR</li>
          <li onClick={()=>scrollToSection(about)}>ABOUT</li>
        </div>

        <div className='navbarLink'>
          <svg onClick={() => window.open("https://www.facebook.com/", "PopupWin", "width=500,height=600")} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" style={{marginRight:'20px'}}>
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
          <svg onClick={() => window.open("https://www.instagram.com/", "PopupWin", "width=500,height=600")} xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </div>
      </div>

      <div className='main'>
        <video src={videoBg} autoPlay loop muted/>
        <div className='content'>
          <p className='hotelTitle'>HOTEL YOGIYA</p>
          <Button variant="outline-light" style={{fontSize:'24px'}} onClick={()=>scrollToSection(rooms)} >SEARCH</Button>{' '}
        </div>
      </div>
      
      <div >
        <div style={{height:'70px'}} ref={rooms}></div>
        <div className='roomsNav'>
          <p>Rooms</p>
        </div>
        <Rooms />
      </div>
      

      <div>
        <div style={{height:'70px'}} ref={facilities}></div>
        <div className='facilitiesNav'>
          <p>Facilities</p>
        </div>
        <div className='facilities'>  
          <Facilities/>
        </div>
      </div>
      
      <div>
        <div style={{height:'70px'}} ref={diningBar}></div>
        <div className='dinigBarNav'>
          <p>Dining&Bar</p>
        </div>
        <DiningBar/>
      </div>
      
      <div>
        <div style={{height:'70px'}}  ref={about}></div>
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
            <div className='underNavBg' style={{
              position:'fixed',
              top:'0px',
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
