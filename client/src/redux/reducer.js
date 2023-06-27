import { ADD_ALLGAMES } from "./typesActions";


const initialState = {
    allGames: [],
    games: [],
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
        default:
            return {
                ...state
            }
    }
};