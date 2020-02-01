import React from "react";
import useStyles from "../src/styles/main.styles";
import handouts from "../src/data/handouts";
import CardDisplay from "../src/components/cardDisplay";
import ActionButtons from "../src/components/handouts/cardButtons";
import { Button, Grid, Typography, Container } from "@material-ui/core";

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.main}>
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
              Research Methods
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Course Objectives
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <a
                      href={`/handouts/lecture_slides.pptx`}
                      className={classes.a}
                      download
                    >
                      Download Lecture Slides
                    </a>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {/* card Display */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            component="h2"
            variant="h5"
            align="center"
            className={classes.subHeaderText}
            gutterBottom
          >
            Hand-Outs
          </Typography>

          <Grid container spacing={4}>
            {handouts.map(handout => (
              <CardDisplay
                key={handout.title}
                cardItem={handout}
                actionBtns={<ActionButtons handout={handout} />}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
