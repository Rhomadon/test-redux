import { combineReducers, compose, createStore } from "redux"
import counterReducers from "./Features/Counter/reducers"

let rootReducers = combineReducers({
    counter: counterReducers
})

let composeEnhancers = window.__REDUX_DEVTOOL_EXTENSTION_COMPOSE__ || compose

let store = createStore(rootReducers, composeEnhancers())

export default store