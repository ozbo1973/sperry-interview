import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ClassIcon from "@material-ui/icons/Class";
import useStyles from "../styles/main.styles";
import { useRouter } from "next/router";

const Nav = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.iconButton}
          onClick={() => router.push("/")}
          color="inherit"
        >
          <ClassIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Module 02: Research Methods
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
