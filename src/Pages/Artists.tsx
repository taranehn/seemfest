import * as React from "react";
import { Divider, Grid, makeStyles } from "@material-ui/core";
import Embryo from "../artists/Embryo";
import Persian from "../artists/Persian";
import Roya from "../artists/Roya";
import Makan from "../artists/Makan";
import Peyman from "../artists/Peyman";
import Sam from "../artists/Sam";
import Roody from "../artists/Roody";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  line: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(2),
  },
}));

export default function Artists() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <Embryo />
        <Divider className={classes.line} />
      </Grid>
      <Grid item>
        <Persian />
        <Divider className={classes.line} />
      </Grid>
      <Grid item>
        <Roody />
        <Divider className={classes.line} />
      </Grid>
      <Grid item>
        <Peyman />
        <Divider className={classes.line} />
      </Grid>
      <Grid item>
        <Roya />
        <Divider className={classes.line} />
      </Grid>
      <Grid item>
        <Sam />
        <Divider className={classes.line} />
      </Grid>
      <Grid item>
        <Makan />
      </Grid>
    </Grid>
  );
}
