import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { api_reducer } from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = thunk

const reducers = combineReducers({
    api_state : api_reducer
})

const store = createStore(reducers , {} ,composeWithDevTools( applyMiddleware(middleware)))
export default store