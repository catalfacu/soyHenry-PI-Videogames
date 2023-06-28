import { ADD_ALLGAMES, CLEAR_DETAIL, CREATE_GAME, ERROR, GAMESBYNAME, GET_GAMEDETAIL, GET_GENRES } from "./typesActions";
import axios from 'axios';
const ENDPOINT = 'http://localhost:3001/videogames';
const ENDPOINT_GENRES = 'http://localhost:3001/genres';


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

export const getAllGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(ENDPOINT_GENRES);
            return dispatch({
                type: GET_GENRES,
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

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
        payload: []
    }
};

export const getGamesByName = (name) => {
    return async(dispatch) => {
        try {
            const { data } = await axios(`${ENDPOINT}?name=${name}`);
            return dispatch({
                type: GAMESBYNAME,
                payload: data
            })
        } catch (error) {
            return dispatch({
                type:ERROR,
                payload: error.message
            });
        }
    }
};

export const createGame = (gameData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(ENDPOINT,gameData);
            return dispatch({
                type: CREATE_GAME,
                payload: data
            })
        } catch (error) {
           return dispatch({
            type: ERROR,
            payload: error.message
           }) 
        }
    }
}