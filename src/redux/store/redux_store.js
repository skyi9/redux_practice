import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { get_reducer  , post_reducer} from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = thunk

const reducers = combineReducers({
    api_stateGet : get_reducer ,
    api_statePost: post_reducer ,
})

const store = createStore(reducers , {} ,composeWithDevTools( applyMiddleware(middleware)))
export default store