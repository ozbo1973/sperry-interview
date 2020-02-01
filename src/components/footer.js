import Copyright from "./copyRight";
import useStyles from "../styles/main.styles";
import { Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Property of Dr Kathryn Sperry.
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="inherit"
        component="p"
      >
        ## of years experience teaching Research Methods
      </Typography>
      <Copyright />
    </footer>
  );
}
