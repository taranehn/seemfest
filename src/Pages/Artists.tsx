import * as React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import Embryo from '../artists/Embryo';
import Persian from '../artists/Persian';
import Roya from '../artists/Roya';
import Makan from '../artists/Makan';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  line: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(2),
  },
  item: {
    width: 'inherit'
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
      <Grid className={classes.item} item>
        <Embryo />
        <Divider className={classes.line} />
      </Grid>
      <Grid className={classes.item} item>
        <Persian />
        <Divider className={classes.line} />
      </Grid>
      <Grid className={classes.item} item>
        <Roya />
        <Divider className={classes.line} />
      </Grid>
      <Grid className={classes.item} item>
        <Makan />
      </Grid>
    </Grid>
  )
}
