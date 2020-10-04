import { makeStyles } from "@material-ui/core/styles";

const SnackBarStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default SnackBarStyles;
