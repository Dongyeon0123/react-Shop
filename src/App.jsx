import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png';
import data from './data.jsx'
import Shoes from './shoes';
import { Routes, Route, Link } from 'react-router-dom'


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

      <Link to="/">홈</Link>
      <Link to="detail">상세페이지</Link>

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
        <Route path="/detail" element={
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                  <h4 className="pt-5">상품명</h4>
                  <p>상품설명</p>
                  <p>120000원</p>
                  <button className="btn btn-danger">주문하기</button>
                  {/* 이거 컴포넌트로 빼보기. */}
                </div>
              </div>
            </div>
          </>
        } />
        {/* 라우터로 페이지 나누는 법 */}
      </Routes>

      
    </div>
  )
}


export default App
