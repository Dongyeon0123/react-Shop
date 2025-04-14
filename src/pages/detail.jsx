import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  // YellowBtn을 갖다 쓸 때, bg라는 프롭스 입력 가능
  color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`

let Box = styled.div`
  background : grey;
  padding: 20px;
`
// styled.components 장점
// 1. 스타일이 다른 js파일로 오염되지 않음.
// 컴포넌트 전용 css파일을 만들고싶으면, 컴포넌트.module.css파일로 만들면 됨.
// 2. 페이지 로딩시간 단축

function Detail(props) {

  useEffect(()=>{
    console.log('안녕');
  });
  // useEffect 안에 있는 코드는
  // html 렌더링 후에 동작함. 예를들어,

  // for (const i = 0 ; i < 10000 ; i++) {
  //   console.log('안녕하세요');
  // }
  // 위 코드를 실행하게 되면, 반복문이 실행되고 사이트가 렌더링됨. -> 효율적이지 않음.
  // useEffect 안에 넣으면 html이 먼저 렌더링되게 때문에 효율적임.

  // 그러면 useEffect를 언제 쓰면 좋은가 ?
  // -> 어려운 연산을 할 때,
  // -> 서버에서 데이터를 가져오는 작업.
  // -> 타이머를 장착하는것.

  const [count, setCount] = useState(3);
  const [alert, setAlert] = useState(true); // 알림창 표시 여부 상태

  useEffect(() => {
    let a = setTimeout(()=>{ setAlert(false) }, 3000);

    return () => {
      clearTimeout(a);
    }
  }, []);

  // 정리시간
  // useEffect(() => { }) 1. 재렌더링마다 실행하고 싶으면
  // useEffect(() => { }, []) 2. mount시 1회 실행하고 싶으면
  // useEffect (() => {
  //   return () => {} 3. unmount시 1회 실행하고 싶으면
  // }, )
  // 4. useEffect 실행 전에 뭔가 실행하려면, 언제나 return () => {}
  // 5. 특성 state 변경 시에만 실행하고 싶으면, 2번 코드에서[] 부분에 state명 추가

  let { id } = useParams();

  // id 값과 일치하는 상품을 배열에서 찾기
  let foundShoe = props.shoes.find((a) => a.id == id);

  let [count1, setCount1] = useState(0);

  let [탭, 탭변경] = useState(0);

  // 상품이 없는 경우 예외 처리
  if (!foundShoe) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center pt-5">
            <h4>❌ 해당 상품을 찾을 수 없습니다.</h4>
            <p>다시 확인해주세요.</p>
          </div>
        </div>
      </div>
    );
  }

  // 상품이 있는 경우 정상 출력
  return (
    <div className="container">
      {
        alert == true
        ? <div className="alert alert-warning">
            3초이내 구매시 할인
          </div>
        : null
      }
      {count1}
      <button onClick={()=>{ setCount(count1+1) }}>버튼</button>
      <Box>
        <YellowBtn bg='blue'>버튼</YellowBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{foundShoe.title}</h4>
          <p>{foundShoe.content}</p>
          <p>{foundShoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => {탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
      </Nav>
      <TapContent 탭={탭}/>
      {
        // 탭 == 0 ? <div>내용0</div> : null
        // 탭 == 1 ? <div>내용1</div> : null
      }
    </div>
  );
}
// if문은 html 바깥에서 써야함
// 컴포넌트는 return를 꼭 써야함

function TapContent(props) {
  // if(props.탭 == 0) {
  //   return <div>내용0</div>
  // }
  // if(props.탭 == 1) {
  //   return <div>내용1</div>
  // }
  // if(props.탭 == 2) {
  //   return <div>내용2</div>
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]
  // 반복문으로 가능할수도
}

export default Detail;