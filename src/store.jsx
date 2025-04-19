import { configureStore, createSlice } from '@reduxjs/toolkit'

// Redux를 쓰는 이유
// 컴포넌트간 state 공유 편해짐 (props 전송이 필요없음)

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },

    reducers : {
        이름변경(state) {
            // return 'John Kim'
            return 'John ' + state
        },
        함수2() {

        }
    }
})

export let { 이름변경, 함수2 } = user.actions
// state 변경 함수들이 남음.

// State 수정하는 법 요약
// 1. state 수정 함수를 미리 만든다.
// 2. 컴포넌트에서 store.jsx로 dispatch로 변경 요청을 보냄

let stock = createSlice ({
    name : 'stock',
    initialState : [10, 11, 12]
})
// useState 역할임

// [
//     {id : 0, name : 'White and Black', count : 1},
//     {id : 2, name : 'Grey Yordan', count : 0}
// ]
// 이걸 state로 만들기

let item = createSlice({
    name: 'item',
    initialState: [
      { id: 0, name: 'White and Black', count: 0 },
      { id: 1, name: 'Grey Yordan', count: 0 }
    ],
    reducers: {
      increaseCount(state, action) {
        const found = state.find(item => item.id === action.payload);
        if (found) found.count++;
      }
    }
});

export default configureStore({
  reducer: {
      // 중요 - 여기에 등록해야 사용 가능
      user : user.reducer,
      stock : stock.reducer,
      item : item.reducer
   }
})

export let { increaseCount } = item.actions; // 이거 꼭 해줘야 dispatch에서 사용 가능

// redux용 파일
// 다음으로는 index.jsx 또는 main.jsx 가서 redux 쓰겠다고 선언
// 그러면 모든 파일들이 state 사용 가능

// 참고 - state가 공유가 필요가 없는 경우에는,
// redux를 사용하지 않는게 좋음 즉, redux store안에 모든걸 넣으면 안됨.

// 컴포넌트간 공유가 필요 없으면 useState 쓰는게 나을듯