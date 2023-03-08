import { createStore , combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { restaurantListReducer } from "./Reducer/restReducer";

const reducers = combineReducers({

    restaurantReducer:restaurantListReducer

})


const middleware = [thunk]


//to create store
const store = createStore(reducers,applyMiddleware(...middleware))



export default store;







