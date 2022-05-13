/* eslint-disable import/no-anonymous-default-export */
import { GET_WEATHER } from "../actions/types"

const initialState = {
    weather:{},
    loading: true
}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_WEATHER:
            return {
                ...state,
                weather: payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}