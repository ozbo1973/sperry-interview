import Copyright from "./copyRight";
import useStyles from "../styles/main.styles";
import { Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Property of Kathryn Sperry, Ph.D.
      </Typography>
      <Copyright />
    </footer>
  );
}
