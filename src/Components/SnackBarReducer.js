const initialState = {
  snackbarOpen: false,
  snackbarseverity: "sucess",
  snackbarMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "snackbar_success":
      const { snackbarOpen, snackbarseverity, snackbarMessage } = action;
      return {
        ...state,
        snackbarOpen,
        snackbarseverity,
        snackbarMessage,
      };
    default:
      return state;
  }
};

export const setSnackbar = (
  snackbarOpen,
  snackbarseverity = "sucess",
  snackbarMessage = ""
) => ({
  type: "snackbar_success",
  snackbarOpen,
  snackbarseverity,
  snackbarMessage,
});
