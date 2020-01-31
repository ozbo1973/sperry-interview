import React from "react";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../src/styles/main.styles";

const cards = [
  {
    title: "Correlation Coefficients",
    page: "coefficients",
    description: "Exercises to draw plotting charts to determine blah"
  },
  {
    title: "Independent and Dependent Variables",
    page: "variables",
    description: "Excersices comparing variables"
  },
  {
    title: "Design A Study",
    page: "study",
    description: "Excercise at designing a basic study."
  }
];

function Copyright() {
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

export default function Home() {
  const classes = useStyles();
  const router = useRouter();

  const handleViewClick = pg => {
    router.push(pg);
  };

  return (
    <React.Fragment>
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
              Research Methods
            </Typography>
            <Typography
              component="h2"
              variant="h4"
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
                    Download Course Power Point
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
          {/* End hero unit */}
        </div>
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
            {cards.map(card => (
              <Grid item key={card.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                  <CardMedia>
                    <DescriptionIcon
                      fontSize="large"
                      className={classes.icon}
                      color="primary"
                    />
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={handleViewClick.bind(this, `/${card.page}`)}
                      size="small"
                      color="primary"
                    >
                      View
                    </Button>
                    <Button size="small" color="primary">
                      <a
                        href={`/handouts/${card.page}.pdf`}
                        className={classes.a}
                        download
                      >
                        Download
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Property of Dr. Kathryn Sperry.
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
      {/* End footer */}
    </React.Fragment>
  );
}
