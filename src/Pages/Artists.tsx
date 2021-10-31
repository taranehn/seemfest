import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  }
}));

export default function Programs() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
     Artists
    </Grid>
  )
}
