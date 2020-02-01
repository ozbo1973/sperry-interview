import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles(theme => ({
  // iconButton: {
  //   color: "#fff"
  // },
  icon: {
    marginRight: theme.spacing(2)
  },
  a: {
    color: "inherit",
    textDecoration: "inherit"
  },
  toolbar: {
    color: "#fff"
  },
  questionPaper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  },
  questionBtnContainer: {
    textAlign: "center",
    color: theme.palette.primary.main
  },
  questionEm: {
    fontWeight: "bold",
    color: theme.palette.primary.main
  },
  headerText: {
    color: theme.palette.primary.main,
    fontWeight: "bolder",
    textShadow: "1px 1px 2px " + theme.palette.secondary.main
  },
  subHeaderText: {
    color: theme.palette.secondary.main,
    marginBottom: "1rem"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 3)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5),
    color: "#fff",
    marginTop: "0.7rem"
  },
  copyright: {
    color: "#fff"
  }
}));

export default style;
