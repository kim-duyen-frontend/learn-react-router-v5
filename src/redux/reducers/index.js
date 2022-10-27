const initialState = {
    email: ""
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                email: action.payload.email
            }
        default:
            return state;
    }
}
export default authUserReducer;