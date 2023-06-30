import { ADD_ALLGAMES, CLEAR_DETAIL, CREATE_GAME, ERROR, FILTER_BY_CREATION, FILTER_BY_GENRE, GAMESBYNAME, GET_GAMEDETAIL, GET_GENRES, ORDER_BY_ABC, ORDER_BY_RATING } from "./typesActions";


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
                games: action.payload,
                errors: false
            };
        case CREATE_GAME:
            return {
                ...state,
                allGames: [...state.allGames,action.payload],
                games: [...state.games,action.payload],
                errors: false
            };
        case FILTER_BY_CREATION:
            if(action.payload === "D") return {...state, games: state.allGames};

            const allGames1 = state.allGames;
            const filterCreationDb = allGames1.filter(game => game.createdInDB);
            const filterCreationApi = allGames1.filter(game => !game.createdInDB);

            if(action.payload === "DB") return {...state, games: filterCreationDb};
            if(action.payload === "A") return {...state, games: filterCreationApi};

        case FILTER_BY_GENRE:
            if(action.payload === 'D') return {...state, allGames: state.games};

            let copyGames2 = state.allGames.filter(game => game.genres.includes(action.payload));

            return {
                ...state,
                games: copyGames2
            };
        case ORDER_BY_ABC:
            if(action.payload === "D") return {...state, games: state.allGames};

            let orderName = action.payload === "AA" ? 
            state.games.sort((a,b) => {
                if (a.name > b.name) return 1;
                if (b.name > a.name) return -1;

                return 0
            }) :
            state.games.sort((a,b) => {
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;

                return 0
            })

            return{
                ...state,
                games: orderName
            }

        case ORDER_BY_RATING: 
        if(action.payload === "D") return {...state, allGames: state.games};

        const copyGames4 = state.allGames.sort((a,b) => {
            if(action.payload === "AR") {
                return a.rating - b.rating;
            } else if(action.payload === "DR") {
                return b.rating - a.rating;
            }
        });

        return {
            ...state,
            allGames: copyGames4
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