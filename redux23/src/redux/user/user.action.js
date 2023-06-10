import Axios from 'axios'
//action types
let USER_REQ = 'USER_REQ'
let USER_SUCCESS = 'USER_SUCCESS'
let USER_FAILURE = 'USER_FAILURE'
let user_Req = () => {
    return { type: USER_REQ }
}
let user_Success = (user) => {
    return { type: USER_SUCCESS, payload: user }
}
let user_Failure = () => {
    return { type: USER_FAILURE, payload: "Failure" }
}
let userAction = () => {
    return async (dispatch) => {
        dispatch(user_Req())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                dispatch(user_Success(res.data))
            }).catch((err) => {
                dispatch(user_Failure())

            })
    }

}

export { userAction, USER_REQ, USER_SUCCESS, USER_FAILURE }