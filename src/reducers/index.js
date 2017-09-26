import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import usersList from "./usersList";
import table from "./table";

export default combineReducers({
    form: formReducer,
    usersList,
    table
});