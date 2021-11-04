import * as React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import Embryo from '../artists/Embryo';
import Persian from '../artists/Persian';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  line: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(2),
  }
}));

export default function Artists() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}
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
      </Grid>
    </Grid>
  )
}
