import { ADD_ALLGAMES, ERROR, GET_GAMEDETAIL } from "./typesActions";
import axios from 'axios';


const ENDPOINT = 'http://localhost:3001/videogames';

export const getAllGames = () => {
    return (dispatch) => {
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: ADD_ALLGAMES,
                payload: data,
            });
        })
        .catch(error => {
            return dispatch({
                type: ERROR,
                payload: error.message
            })
        })     
    }
};

export const getGameDetail= (id) => {
 return async(dispatch) => {
    try {
        const {data} = await axios(`${ENDPOINT}/${id}`);
        return dispatch({
            type: GET_GAMEDETAIL,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.message
        })    
    }
 }
};