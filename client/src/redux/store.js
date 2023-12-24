import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import {thunk} from "redux-thunk";

// Permite utilizar "REACT-REDUX":
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	// Permite hacer peticiones asíncronas:
	composeEnhancer(applyMiddleware(thunk))
);

export default store;