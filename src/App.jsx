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
import axios from 'axios'
import Cart from './pages/Cart.jsx'


function App() {

  let [shoes, setShoes] = useState(data);
  // 대충 서버에서 가져온 데이터들임.
  let navigate = useNavigate();
  // 페이지 이동을 도와주는 함수

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/')}}>ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
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
          <div className="container">
              <div className="row">
                { shoes.map ((a, i) =>{
                  return <Card shoes={shoes [i]} i={i} key={i}></Card>
                })}
              </div>
            </div>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  setShoes([...shoes, ...result.data]); // 기존 데이터에 추가
                })
                .catch(() => {
                  console.log('데이터 가져오기 실패');
                })
            }}>버튼</button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        {/* 페이지 여러개 만들고 싶으면, :URL 파라미터 사용 */}

        <Route path='/cart' element={<Cart/>} />

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<About/>}/>
        </Route>
        {/* 위에꺼는 nested routes라고 함. */}

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문 시, 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>


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

function Event() {
  return (
    <div className='event-main'>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){

  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" onClick={() => { navigate('/detail/' + props.i) }} />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}


export default App
