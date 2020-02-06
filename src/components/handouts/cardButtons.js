import useStyles from "../../styles/main.styles";
import { Button } from "@material-ui/core";

export default function ActionButtons({ handout }) {
  const classes = useStyles();

  return (
    <>
      <Button size="small" color="primary">
        <a className={classes.a} href={`/${handout.page}`}>
          View
        </a>
      </Button>
      <Button size="small" color="primary">
        <a
          href={`/handouts/${handout.page}.pdf`}
          target="_blank"
          className={classes.a}
          download
        >
          Download
        </a>
      </Button>
    </>
  );
}
