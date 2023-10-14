import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser.js";
import questionReducer from "./questions.js";
import usersReducer from "./users";

export default combineReducers({
	authReducer,
	currentUserReducer,
	questionReducer,
	usersReducer,
});