import { ADD_ALLGAMES, ERROR } from "./typesActions";

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