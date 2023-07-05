import { ADD_ALLGAMES, CLEAR_DETAIL, CREATE_GAME, ERROR, FILTER_BY_CREATION, FILTER_BY_GENRE, GAMESBYNAME, GET_GAMEDETAIL, GET_GENRES, ORDER_BY_ABC, ORDER_BY_RATING } from "./typesActions";


const initialState = {
    allGames: [],
    games: [],
    game: [],
    genres: [],
    errors: null
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ALLGAMES:
            return {
                ...state,
                allGames: action.payload,
                games: action.payload,
                errors: null
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
                errors: null
            };
        case GET_GAMEDETAIL:
            return {
                ...state,
                game: action.payload,
                errors: null
            };
        case CLEAR_DETAIL:
            return {
                ...state,
                game: action.payload,
                errors: null
            };
        case GAMESBYNAME:
            return {
                ...state,
                games: action.payload,
                errors: null
            };
        case CREATE_GAME:
            return {
                ...state,
                allGames: [...state.allGames,action.payload],
                games: [...state.games,action.payload],
                errors: null
            };
            
        case FILTER_BY_CREATION:
            if(action.payload === "D") return {...state, games: state.allGames};

            const allGames1 = state.allGames;
            const filterCreationDb = allGames1.filter(game => game.createdInDB);
            const filterCreationApi = allGames1.filter(game => !game.createdInDB);

            if(action.payload === "DB") return {...state, games: filterCreationDb};
            if(action.payload === "A") return {...state, games: filterCreationApi};

        case FILTER_BY_GENRE:
            if(action.payload === 'D') return {...state, games: state.allGames};

            let copyGames2 = state.allGames.filter(game => game.genres.includes(action.payload));

            return {
                ...state,
                games: copyGames2
            };

        case ORDER_BY_ABC:
            let orderedGamesAbc = [];    //el metodo sort no modifica el array original, lo ordena y devuelve una nueva referencia del array pero ordenado
            if(action.payload === "D") {
                orderedGamesAbc = state.allGames;
            } else {
                orderedGamesAbc = action.payload === "AA"
                ? [...state.games].sort((a,b)=> (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                : [...state.games].sort((a,b)=> (a.name > b.name ? -1 : b.name > a.name ? 1 : 0))
            };

            return{
                ...state,
                games: orderedGamesAbc
            };

        case ORDER_BY_RATING:
        let orderedGamesRating = []; 
        if(action.payload === "D") {
            orderedGamesRating = state.allGames;
        } else {
            orderedGamesRating = action.payload === "AR"
            ? [...state.games].sort((a,b) => (a.rating - b.rating))
            : [...state.games].sort((a,b) => (b.rating - a.rating))
        };

        return {
            ...state,
            games: orderedGamesRating
        };

        case ERROR:
            return {
                ...state,
                errors: action.payload
            };

        default:
            return {
                ...state
            };
    }
};