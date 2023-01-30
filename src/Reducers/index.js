import * as actionTypes from "./types";
import { combineReducers } from "redux";

const initial_api_data = {
    data:[]
}

/*action = {
    types = "SET_AUTH_STATUS",
    payload.authStatus: true
}*/

// maintaining authentication status of user using Redux 
const data_reducer = (state = initial_api_data, action) => {
    switch (action.type) {
        case actionTypes.SET_API_DATA:
            return { 
                ...state,
                data: action.payload.data,
            }
        
        default: return state
    }
}





const rootReducer = combineReducers({
    api_data: data_reducer
})

export default rootReducer