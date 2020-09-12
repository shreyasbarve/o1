import { makeStyles } from "@material-ui/core/styles";

const FullDialogStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default FullDialogStyles;
