import {combineReducers} from 'redux'
import UsersReducers from "./reducer-user"
import MovieReducers from "./reducer-movies"
import ActionReducer from "./reducer-userclick"

const allReducers = combineReducers({
                    users:UsersReducers,
                    movies:MovieReducers,
                    clickeduser:ActionReducer
                })

export default allReducers