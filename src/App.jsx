import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.jsx'
import Shoes from './shoes';


function App() {

  let [shoes] = useState(data);
  // 대충 서버에서 가져온 데이터들임.

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}>

      </div>

      <Shoes shoes={shoes} />
    </div>
  )
}


export default App
