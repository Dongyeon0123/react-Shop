import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { increaseCount, 이름변경, 나이 } from '../store.jsx';
import { useDispatch } from 'react-redux';

function Cart() {

    let state = useSelector((state) => state)
    // Redux store 가져와줌.
    // 위처럼 코드 짜면 Redux store에 있던 state가 남음
    // console.log(state);
    // console.log(state.user);
    let dispatch = useDispatch();
    // 이게 뭐냐면, store.jsx로 요청 보내주는 함수. 

    // console.log(state.user)
    // console.log(state.stock)

    return (
        <div>

            <div style={{ textAlign: 'center' }}>{state.user.name} {state.user.age}의 장바구니</div>
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => {
                    dispatch(나이(100));
                }}>버튼</button>
                {/* store에서 나이 함수를 사용하려면,
                store에서 export해주고, 이 페이지에서 import 해야됨.
                */}
            </div>


            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {state.item.map((item, i) => (
                    <tr key={i}>
                        <td>{state.item[i].id}</td>
                        <td>{state.item[i].name}</td>
                        <td>{state.item[i].count}</td>
                        <td>
                            <button onClick={() => dispatch(increaseCount(item.id))}>
                            +
                            </button>
                        </td>
                        <td>
                            <button onClick={() => {
                                dispatch(이름변경());                        
                            }}> + </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart