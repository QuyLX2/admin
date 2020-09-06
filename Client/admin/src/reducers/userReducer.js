import { LOGGIN } from "../constants/ActionsType"

const initialStateUser = {
    isLoggedIn: false,
    name: ""
}

function userReducers(state = initialStateUser, action) {
    switch (action.type) {
        case LOGGIN:
            return {
                ...state,
                name: action.payload.name,
                isLoggedIn: true
            };

        default:
            return state;
    }
}

export default userReducers;