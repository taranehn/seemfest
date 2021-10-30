import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useIntl } from 'react-intl';
import RoyaPoster from './images/poster-roya.jpg';
import ProgramCard from './ProgramCard';
import { MOKA, FEIERWEK, EINSTEINKULTUR, IMPORTEXPORT } from './const/addresses';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  }
}));

export default function Programs() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid className={classes.root}
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <ProgramCard
            image={RoyaPoster}
            name={intl.formatMessage({ id: "embryo" })}
            time={intl.formatMessage({ id: "embryo-time" })}
            date={intl.formatMessage({ id: "embryo-date" })}
            venue={intl.formatMessage({ id: "embryo-venue" })}
            price={intl.formatMessage({ id: "embryo-price" })}
            linkToAddress={IMPORTEXPORT}
          />
        </Grid>
        <Grid item>
          <ProgramCard
            image={RoyaPoster}
            name={intl.formatMessage({ id: "persian-empire" })}
            time={intl.formatMessage({ id: "persian-time" })}
            date={intl.formatMessage({ id: "persian-date" })}
            venue={intl.formatMessage({ id: "persian-venue" })}
            price={intl.formatMessage({ id: "persian-price" })}
            linkToAddress={MOKA}
          />
        </Grid>
      </Grid >
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <ProgramCard
            image={RoyaPoster}
            name={intl.formatMessage({ id: "roya" })}
            time={intl.formatMessage({ id: "roya-time" })}
            date={intl.formatMessage({ id: "roya-date" })}
            venue={intl.formatMessage({ id: "roya-venue" })}
            price={intl.formatMessage({ id: "roya-price" })}
            linkToAddress={EINSTEINKULTUR}
          />
        </Grid>
        <Grid item>
          <ProgramCard
            image={RoyaPoster}
            name={intl.formatMessage({ id: "makan" })}
            time={intl.formatMessage({ id: "makan-time" })}
            date={intl.formatMessage({ id: "makan-date" })}
            venue={intl.formatMessage({ id: "makan-venue" })}
            price={intl.formatMessage({ id: "makan-price" })}
            linkToAddress={FEIERWEK}
          />
        </Grid>
      </Grid >
    </Grid>
  )
}
