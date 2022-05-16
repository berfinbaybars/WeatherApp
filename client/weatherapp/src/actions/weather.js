import { GET_WEATHER, ERROR_WEATHER } from "./types"
import api from "../utils/api"

export const getWeather = (location) => async dispatch => {
    try {
        const res = await api.post('/weather', { location });
        
        dispatch({
            type: GET_WEATHER,
            payload: res.data
        })
    }
    catch(error){
        console.log(error);
        dispatch({
            type: ERROR_WEATHER,
            payload: {}
        })
    }
}