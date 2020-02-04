import Head from "next/head";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Paper
} from "@material-ui/core";
import HandoutHero from "../src/components/handouts/hero";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useStyles from "../src/styles/main.styles";

const Study = () => {
  const classes = useStyles();
  const PDF_PATH = `/handouts/study.pdf`;
  const HANDOUT_TITLE = "Design A Study";

  return (
    <>
      <Head>
        <title>Research Methods | Design A Study</title>
      </Head>
      <main>
        {/* Hero unit */}
        <HandoutHero handoutTitle={HANDOUT_TITLE} pdfPath={PDF_PATH} />

        {/* questions */}
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              {/* Question 00 */}
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
              {/* Question 01 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h4">
                      1. What is your independent variable? What is your
                      dependent variable?{" "}
                      <span className={classes.questionEm}>
                        (Remember the I.V. would be causing a change in the
                        D.V.)
                      </span>
                    </Typography>
                    <List dense>
                      <ListItem className={classes.questionEm}>
                        I.V. <ArrowForwardIcon className={classes.icon} />
                      </ListItem>
                      <ListItem className={classes.questionEm}>
                        D.V. <ArrowForwardIcon className={classes.icon} />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
              {/* Question 02 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h4">
                      2. Design{" "}
                      <span className={classes.questionEm}>
                        {" "}
                        an experimental study{" "}
                      </span>
                      to investigate these variables. What will be the basic
                      procedure of the experiment? Which variable will you
                      manipulate and how?
                      <span className={classes.questionEm}>
                        (Hint: random assignment, manipulate, measure)
                      </span>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              {/* Question 03 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h4">
                      3. Do any{" "}
                      <span className={classes.questionEm}>ethical</span> and/or{" "}
                      <span className={classes.questionEm}>
                        practical (i.e., time, money, logistics)
                      </span>{" "}
                      issues arise?
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              {/* Question 04 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h4">
                      4. Now, using the same variables, design{" "}
                      <span className={classes.questionEm}>
                        a correlational study
                      </span>{" "}
                      to investigate the relationship between these two
                      variables. What is the main difference between this and
                      the experiment described above?
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              {/* Question 05 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h4">
                      5.Assume that your study produces{" "}
                      <span className={classes.questionEm}>
                        a significant correlation
                      </span>
                      between the two variables. Draw the graph of the results.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              {/* Question 06 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h4">
                      6. If there was a significant{" "}
                      <span className={classes.questionEm}>correlation</span>{" "}
                      between your two variables, does this mean that one
                      variable{" "}
                      <span className={classes.questionEm}>causes</span> the
                      other variable? EXPLAIN.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Study;
