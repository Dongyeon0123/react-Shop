import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.jsx'
import Shoes from './shoes';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail.jsx'


function App() {

  let [shoes] = useState(data);
  // 대충 서버에서 가져온 데이터들임.
  let navigate = useNavigate();
  // 페이지 이동을 도와주는 함수

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/" className='home'>홈</Link>
      <Link to="detail" className='detail'>상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}>

          </div>
          <div className="box">
            <Shoes shoes={shoes} />
          </div>
          </>
        } />
        <Route path="/detail" element={<Detail/>} />

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<About/>}/>
        </Route>
        {/* 위에꺼는 nested routes라고 함. */}


        {/* 라우터로 페이지 나누는 법 */}
      </Routes>

      
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
      
    </div>
  )
}


export default App
