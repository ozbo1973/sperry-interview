import { useRouter } from "next/router";
import useStyles from "../../styles/main.styles";
import { Button } from "@material-ui/core";

export default function ActionButtons({ handout }) {
  const classes = useStyles();
  const router = useRouter();

  const handleViewClick = pg => {
    router.push(pg);
  };

  return (
    <>
      <Button
        onClick={handleViewClick.bind(this, `/${handout.page}`)}
        size="small"
        color="primary"
      >
        View
      </Button>
      <Button size="small" color="primary">
        <a
          href={`/handouts/${handout.page}.pdf`}
          className={classes.a}
          download
        >
          Download
        </a>
      </Button>
    </>
  );
}
