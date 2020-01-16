
import projectReducer from './projectReducer';
import userReducer from './userReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    project : projectReducer,
    user: userReducer
})

export default rootReducer;