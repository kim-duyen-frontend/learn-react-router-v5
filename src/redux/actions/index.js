import { myAPI } from "../../utils/callApi";

export const loginSuccess = (email, token) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            email,
            token
        }
    }
}

export const loginUser = (infoUser) => {
    return async function (dispatch) {
        try {
            const response = await myAPI.post("/api/login", infoUser);
            if (response && response.data.token) {
                const email = infoUser.email;
                const token = response.data.token;
                localStorage.setItem("token", response?.data.token);
                dispatch(loginSuccess(email, token))
            }
        } catch (error) {
            console.log(error);
        }
    }
}