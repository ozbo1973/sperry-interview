import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Paper,
  Button,
  IconButton
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PDFIcon from "@material-ui/icons/PictureAsPdf";
import { useRouter } from "next/router";
import useStyles from "../src/styles/main.styles";

const Study = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            className={classes.headerText}
            gutterBottom
          >
            Design a Study
          </Typography>
          <div className={classes.questionBtnContainer}>
            <IconButton onClick={() => router.push("/")} color="primary">
              <HomeIcon className={classes.icon} />
            </IconButton>
            <IconButton color="primary">
              <a
                href={`/handouts/study.pdf`}
                style={{ paddingTop: "3px" }}
                className={classes.a}
                download
              >
                <PDFIcon color="primary" className={classes.icon} />
              </a>
            </IconButton>
          </div>
        </Container>
        {/* End hero unit */}
      </div>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item>
            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography className={classes.questionEm} component="h3">
                    Choose one of the following sets of variables:
                  </Typography>
                  <List component="ol" dense={true}>
                    <ListItem>1. Self-esteem and test performance</ListItem>
                    <ListItem>
                      2. The amount of time couples spend together and their
                      relationship satisfaction
                    </ListItem>
                    <ListItem>
                      3. Audience members’ opinions of a movie and their mood
                    </ListItem>
                    <ListItem>
                      4. Physical attractiveness of a political candidate and
                      voters’ opinions of him/her
                    </ListItem>
                    <ListItem>5. Cell phone use and driving skills</ListItem>
                  </List>
                  <Typography className={classes.questionEm} component="h3">
                    The topic from the list above that we chose is:
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography component="h4">
                    1. What is your independent variable? What is your dependent
                    variable? (Remember the{" "}
                    <span className={classes.questionEm}>I.V.</span> would be
                    causing a change in the D.V.)
                  </Typography>
                  <List dense>
                    <ListItem>I.V.</ListItem>
                    <ListItem>D.V.</ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography component="h4">
                    2. Design an experimental study to investigate these
                    variables. What will be the basic procedure of the
                    experiment? Which variable will you manipulate and how?
                    (Hint: random assignment, manipulate, measure)
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography component="h4">
                    3. Do any ethical and/or practical (i.e., time, money,
                    logistics) issues arise?
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography component="h4">
                    4. Now, using the same variables, design a correlational
                    study to investigate the relationship between these two
                    variables. What is the main difference between this and the
                    experiment described above?
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography component="h4">
                    5.Assume that your study produces a significant correlation
                    between the two variables. Draw the graph of the results.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Paper className={classes.questionPaper}>
                  <Typography component="h4">
                    6. If there was a significant correlation between your two
                    variables, does this mean that one variable causes the other
                    variable? EXPLAIN.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Study;
