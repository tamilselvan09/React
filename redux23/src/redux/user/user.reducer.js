
import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'
let initialState = {
    users: []
}
let userReducer = (state = initialState, action) => {
    console.log(action)
    console.log(action.type)
    switch (action.type) {
        case 'USER_REQ':
            return { users: [] }
        case 'USER_SUCCESS':
            return { users: action.payload }
        default:
            return state
    }
}
export { userReducer }