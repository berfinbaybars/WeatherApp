import { GET_WEATHER } from "./types"
import api from "../utils/api"

export const getWeather = (location) => async dispatch => {
    try {
        const res = await api.post('/weather', { location });
        console.log(res);
        dispatch({
            type: GET_WEATHER,
            payload: res.data
        })
    }
    catch(error){
        // error action will be added
        console.log(error);
        dispatch({
            type: GET_WEATHER,
            payload: {}
        })
    }
}