import { makeStyles } from "@material-ui/core/styles";

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
