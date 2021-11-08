import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
    height: "75vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.dark,
  },
}));

interface ItemProps {
  image: string;
}

export default function Item({ image }: ItemProps) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <img width="100%" alt={"slide"} src={image} />
    </Paper>
  );
}
