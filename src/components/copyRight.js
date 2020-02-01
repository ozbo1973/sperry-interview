import useStyles from "../styles/main.styles";
import { Typography } from "@material-ui/core";

export default function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.copyright} align="center">
      {"Copyright © "}
      Dr. Sperry Interview
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
