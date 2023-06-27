import { ADD_ALLGAMES, GET_GAMEDETAIL } from "./typesActions";


const initialState = {
    allGames: [],
    games: [],
    game: [],
    errors: false
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ALLGAMES:
            return {
                ...state,
                allGames: action.payload,
                games: action.payload,
                errors: false
            };
        case GET_GAMEDETAIL:
            return {
                ...state,
                game: action.payload,
                errors: false
            }
        default:
            return {
                ...state
            }
    }
};