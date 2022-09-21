import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../images/logo.png'




function NavBar() {
    return(
        <Navbar  className='Menu' >
        <Container style={{cursor:'curor'}}>
            <img src={img} width='200px' height={'100px'} style={{opacity: '0.85'}}></img>
              <div className='hero'>
                <ul >
                  <li className='link' >ROOMS</li>
                  <li className='link' >FACILITIES</li>
                  <li className='link' >DINING&BAR</li>
                  <li className='link' >ABOUT</li>
              </ul>
              </div>
        </Container>
      </Navbar>
    )
}

export default NavBar;