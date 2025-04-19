import { createSlice } from '@reduxjs/toolkit'

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

export default user