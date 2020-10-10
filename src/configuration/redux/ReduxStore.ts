import {combineReducers, createStore} from 'redux';
import {themeReducer} from "./ThemeReducer";

export interface ReduxState {
    darkTheme: boolean
}

const rootReducer = combineReducers({
    darkTheme: themeReducer
});

// @ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, reduxDevTools);


export {store}

