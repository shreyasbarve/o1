import snackbarReducer from "./SnackBarReducer";
const { combineReducers, createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").default;

const reducer = combineReducers({
  snackbar: snackbarReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
