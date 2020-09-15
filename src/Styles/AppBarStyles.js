import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const AppbarTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff[500]",
    },
  },
});

const AppBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(2),
  }
}));

export default AppBarStyles;
