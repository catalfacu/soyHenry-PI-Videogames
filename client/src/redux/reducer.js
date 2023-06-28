import { ADD_ALLGAMES, CLEAR_DETAIL, CREATE_GAME, ERROR, GAMESBYNAME, GET_GAMEDETAIL, GET_GENRES } from "./typesActions";


const initialState = {
    allGames: [],
    games: [],
    game: [],
    genres: [],
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
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
                errors: false
            };
        case GET_GAMEDETAIL:
            return {
                ...state,
                game: action.payload,
                errors: false
            };
        case CLEAR_DETAIL:
            return {
                ...state,
                game: action.payload,
                errors:false
            };
        case GAMESBYNAME:
            return {
                ...state,
                allGames: action.payload,
                errors: false
            };
        case CREATE_GAME:
            return {
                ...state,
                allgames: [...state.allGames,action.payload],
                games: [...state.games,action.payload],
                errors: false
            };
        case ERROR:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return {
                ...state
            }
    }
};