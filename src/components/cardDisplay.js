import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import useStyles from "../styles/main.styles";

export default function CardDisplay({ cardItem, actionBtns }) {
  const classes = useStyles();

  return (
    <Grid item key={cardItem.title} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia>
          <DescriptionIcon
            fontSize="large"
            className={classes.icon}
            color="primary"
          />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {cardItem.title}
          </Typography>
          <Typography>{cardItem.description}</Typography>
        </CardContent>
        <CardActions>{actionBtns}</CardActions>
      </Card>
    </Grid>
  );
}
