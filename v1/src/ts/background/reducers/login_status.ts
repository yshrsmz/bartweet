import * as Actions from "../actions";
import { IPayloadAction } from "../../common/actions";

export interface ILoginStatus {
    isLoaded: boolean;
    isLoggedIn: boolean;
}

const initialState = {
    isLoaded: false,
    isLoggedIn: false,
};

const loginStatus = (state = initialState, action: IPayloadAction<boolean>) => {
    switch (action.type) {
        case Actions.CHECK_LOGIN_RECEIVE:
            return {
                ...state,
                isLoaded: true,
                isLoggedIn: action.payload,
            };
        default:
            return state;
    }
};

export const getLoginStatus = (state: any): ILoginStatus => {
    return state.loginStatus;
};

export default loginStatus;
