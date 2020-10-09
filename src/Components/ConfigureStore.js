import snackbarReducer from "./SnackBarReducer";
const { combineReducers, createStore } = require("redux");

const reducer = combineReducers({
  snackbar: snackbarReducer,
});

const store = createStore(reducer, {});

export default store;
