import apis from "../apis";
import { LOGGIN } from "../constants/ActionsType";
import jwtDecode from 'jwt-decode';

export const login = (data) => (dispatch) => {
    return apis.login(data).then((resp) => {
        if (resp.data.token !== "") {
            let userData = jwtDecode(resp.data.token)
            dispatch({ type: LOGGIN, payload: { name: userData.username } });
            localStorage.setItem("token", resp.data.token)
        }
        return resp;
    })
}