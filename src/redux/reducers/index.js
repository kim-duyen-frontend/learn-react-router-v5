const initialState = {
    email: "",
    auth: false
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                email: action.payload.email,
                auth: true
            }
        default:
            return state;
    }
}
export default authUserReducer;