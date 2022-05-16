/* eslint-disable import/no-anonymous-default-export */
import { GET_WEATHER, ERROR_WEATHER } from "../actions/types"

const initialState = {
    weather:{},
    loading: true,
    error: false
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_WEATHER:
            return {
                ...state,
                weather: payload,
                loading: false,
                error:false
            }
        case ERROR_WEATHER:
            return {
                ...state,
                weather: {},
                loading: true,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}