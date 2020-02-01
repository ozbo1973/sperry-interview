import { useRouter } from "next/router";
import useStyles from "../../styles/main.styles";
import { Container, Typography, IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PDFIcon from "@material-ui/icons/PictureAsPdf";

export default function Hero({ handoutTitle, pdfPath }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          className={classes.headerText}
          gutterBottom
        >
          {handoutTitle}
        </Typography>
        <div className={classes.questionBtnContainer}>
          <IconButton onClick={() => router.push("/")} color="primary">
            <HomeIcon className={classes.icon} />
          </IconButton>
          <IconButton color="primary">
            <a
              href={pdfPath}
              style={{ paddingTop: "3px" }}
              className={classes.a}
              download
            >
              <PDFIcon color="primary" className={classes.icon} />
            </a>
          </IconButton>
        </div>
      </Container>
    </div>
  );
}
