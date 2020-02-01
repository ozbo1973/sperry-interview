import HandoutHero from "../src/components/handouts/hero";
import variableQuestions from "../src/data/iv_dv_questions";
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
  const PDF_PATH = `/handouts/variables.pdf`;
  const HANDOUT_TITLE = "Independent and Dependent Variables";

  return (
    <main>
      {/* Hero unit */}
      <HandoutHero handoutTitle={HANDOUT_TITLE} pdfPath={PDF_PATH} />

      {/* Questions */}
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item>
            {variableQuestions.map(q => (
              <Grid key={q.id} container>
                <Grid item xs>
                  <Paper className={classes.questionPaper}>
                    <Typography component="h3">{q.question}</Typography>
                    <List component="ol" dense={true}>
                      <ListItem className={classes.questionEm}>IV =</ListItem>
                      <ListItem className={classes.questionEm}>
                        Levels of IV =
                      </ListItem>
                      <ListItem className={classes.questionEm}>DV=</ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Variables;
