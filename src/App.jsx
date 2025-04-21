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

// React 프로젝트 총정리
// 페이지 분리 및 라우팅
// 	•	페이지를 나눌 때는 React Router의 Route 사용
// 	•	각 페이지는 .jsx 파일로 따로 만들고 export, import해서 사용
// 	•	페이지 이동은 useNavigate() 또는 <Link> 태그로 처리
// 스타일링
// 	•	컴포넌트 전용 CSS 파일 생성하거나 styled-components 사용 가능
// 게시글/미팅글 구현
// 	•	글을 올리면 배열에 추가 (예: setList([...list, newPost]))
// 	•	반복문(.map)으로 리스트 출력
// 	•	삭제 기능 구현 가능 (예: filter() 활용)
// 	•	수정 기능: e.target.value로 입력값 가져오기
// 이벤트 관리
// 	•	이벤트 버블링 방지: e.stopPropagation()(ex. 좋아요 버튼 클릭 시 다른 이벤트 발생 방지)
// 상세 페이지 구현
// 	•	useParams()를 사용하여 URL의 고유 id 값에 따라 해당 게시글/상품 보여줌
// 리스트 출력
// 	•	.map() 함수를 이용해 게시글/상품을 반복 출력(데이터 개수에 따라 자동으로 확장 가능)
// 서버 통신
// 	•	axios 라이브러리 사용
// import axios from 'axios';
// axios.get('https://codingapple1.github.io/shop/data2.json')
//   .then((result) => {
//     setShoes([...shoes, ...result.data]);
//   })
//   .catch(() => {
//     console.log('데이터 가져오기 실패');
//   });
// 상태 관리 - 그냥 Redux 아니고 Redux toolkit임
// 	•	State 공유 필요 X → props로 전달
// 	•	State 공유 필요 O → Redux 사용 (예: 좋아요, 수량 버튼 등)
// 	•	Redux로 상품 목록 등 전역 상태도 관리 가능
// useEffect 사용 시 주의점
// 	•	컴포넌트 언마운트 시 정리할 작업이 있다면 클린업 함수 필요
// useEffect(() => {
//   // 실행할 코드
//   return () => {
//     // 클린업 (예: 타이머 제거 등)
//   };
//  }, []);

// 한 줄 요약
// React 프로젝트를 체계적으로 구성하려면 페이지 분리,
// 상태 관리, 서버 통신, 이벤트 제어, 클린업 등 각 요소를 꼼꼼히 다루는 게 중요!