import { configureStore, createSlice } from '@reduxjs/toolkit'

// Redux를 쓰는 이유
// 컴포넌트간 state 공유 편해짐 (props 전송이 필요없음)

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },

    reducers : {
        이름변경(state) {
            // return 'John Kim'
            // return { name : 'park', age : 20 }
            // 이렇게 해도 되긴 함 근데 조금 더 간단하게
            state.name = 'park' // array/object는 이렇게 사용해도 됨.
            // 위 코드에서 파라미터 state는 위에 있는 state를 의미함.
            
        },
        함수2() {

        },
        // 나이(state) {
        //     state.age += 1
        //     // 여기서 만약 1이 아니라, 3이나 10을 늘리고 싶다면 ?
        //     // 파라미터를 추가해줘야함
        // }
        // state가 array/object면, return 없이 직접 수정해도 됨.
        // 그래서 문자 하나만 필요해도 일부러 {}안에다가 담기도 함
        나이(state, action) {
            state.age += action.payload
        }
        // 파라미터를 뚫으면 비슷한 함수 여러개 필요 없음.
        // 파라미터 작명은 보통 action으로 많이 함
    }
})

export let { 이름변경, 함수2, 나이 } = user.actions
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