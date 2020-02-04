import useStyles from "../styles/main.styles";
import objectives from "../data/objectives";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

export default function Objectives() {
  const classes = useStyles();
  const objectivesList = objectives.map(obj => (
    <ListItem key={obj.id}>
      <ListItemIcon>
        <CheckIcon className={classes.icon} color="primary" />
      </ListItemIcon>
      <ListItemText>{obj.objective}</ListItemText>
    </ListItem>
  ));
  return objectivesList;
}
