import { useParams } from "react-router-dom";
import styled from 'styled-components'

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
  let { id } = useParams();

  // id 값과 일치하는 상품을 배열에서 찾기
  let foundShoe = props.shoes.find((a) => a.id == id);

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
    </div>
  );
}

export default Detail;
