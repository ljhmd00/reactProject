import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../images/logo.png'

function NavBar() {
    return(
        <Navbar  className='Menu' >
        <Container >
            <img src={img} width='200px' height={'100px'} style={{opacity: '0.85'}}></img>
            <Nav >
            <Nav.Link href="#rooms" >ROOMS</Nav.Link>
            <Nav.Link href="#FACILITIES">FACILITIES</Nav.Link>
            <Nav.Link href="#DINING&BAR">DINING&BAR</Nav.Link>
            <Nav.Link href="ABOUT">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;