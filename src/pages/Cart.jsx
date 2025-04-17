import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { increaseCount } from '../store.jsx';
import { useDispatch } from 'react-redux';

function Cart() {

    let a = useSelector((state) => { return state })
    // Redux store 가져와줌.
    // 위처럼 코드 짜면 Redux store에 있던 state가 남음
    // console.log(a);
    // console.log(a.user);
    let dispatch = useDispatch();
    // console.log(a.user)
    // console.log(a.stock)

    return (
        <div>
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
                {a.item.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>
                            <button onClick={() => dispatch(increaseCount(item.id))}>
                            +
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart