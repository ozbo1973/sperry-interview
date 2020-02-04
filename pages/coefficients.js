import Head from "next/head";
import HandoutHero from "../src/components/handouts/hero";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Paper
} from "@material-ui/core";
import useStyles from "../src/styles/main.styles";

const Variables = () => {
  const classes = useStyles();
  const PDF_PATH = `/handouts/coefficients.pdf`;
  const HANDOUT_TITLE = "Correlation Coefficients Excercise";

  return (
    <>
      <Head>
        <title>Research Methods | Correlation Coefficients</title>
      </Head>
      <main>
        {/* Hero unit */}
        <HandoutHero handoutTitle={HANDOUT_TITLE} pdfPath={PDF_PATH} />

        {/* Questions */}
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              {/* Question 00 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      For each of the following correlations, draw the
                      scatterplot of the relationship. Then, for each, please
                      indicate:{" "}
                      <span className={classes.questionEm}>
                        (a) the direction of the relationship, and (b) the
                        strength of the relationship
                      </span>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {/* Question 01 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      1. r = -.96 between craving for pizza and ability to
                      concentrate on studying.
                    </Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>a)</ListItem>
                      <ListItem className={classes.questionEm}>b)</ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>

              {/* Question 02 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      2. r = .65 between subjective well-being and extroversion
                    </Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>a)</ListItem>
                      <ListItem className={classes.questionEm}>b)</ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>

              {/* Question 03 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      3. r = -.53 between age and likelihood of falsely
                      confessing to a crime.
                    </Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>a)</ListItem>
                      <ListItem className={classes.questionEm}>b)</ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>

              {/* Question 04 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      4. r = .33 between religiosity and gratitude
                    </Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>a)</ListItem>
                      <ListItem className={classes.questionEm}>b)</ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>

              {/* Question 05 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      5. r = .79 between time spent with dogs and level of
                      self-reported happiness.
                    </Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>a)</ListItem>
                      <ListItem className={classes.questionEm}>b)</ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>

              {/* Question 06 */}
              <Grid container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">
                      6. Create your own correlation between two variables. What
                      would the correlation coefficient be? Draw the scatter
                      plot as you did for the examples above
                    </Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>a)</ListItem>
                      <ListItem className={classes.questionEm}>b)</ListItem>
                    </List>
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

export default Variables;
