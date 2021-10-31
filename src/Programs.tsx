import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useIntl } from 'react-intl';
import RoyaPoster from './images/poster-roya.jpg';
import ProgramCard from './ProgramCard';
import { MUCCA, FEIERWEK, EINSTEINKULTUR, IMPORTEXPORT } from './const/addresses';
import { EMBRYO, PERSIAN, ROYA, FESTIVALPASS, MAKAN, YALDA } from './const/tickets';

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
            linkToTicket={EMBRYO}
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
            linkToAddress={MUCCA}
            linkToTicket={PERSIAN}
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
            linkToTicket={ROYA}
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
            linkToTicket={MAKAN}
          />
        </Grid>
      </Grid >
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
            name={intl.formatMessage({ id: "yalda" })}
            time={intl.formatMessage({ id: "yalda-time" })}
            date={intl.formatMessage({ id: "yalda-date" })}
            venue={intl.formatMessage({ id: "yalda-venue" })}
            price={intl.formatMessage({ id: "yalda-price" })}
            linkToAddress={IMPORTEXPORT}
            linkToTicket={YALDA}
          />
        </Grid>
        <Grid item>
          <ProgramCard
            image={RoyaPoster}
            name={intl.formatMessage({ id: "festival-pass" })}
            time={intl.formatMessage({ id: "festival-pass-time" })}
            date={intl.formatMessage({ id: "festival-pass-date" })}
            venue={"-"}
            price={intl.formatMessage({ id: "festival-pass-price" })}
            linkToAddress={IMPORTEXPORT}
            linkToTicket={FESTIVALPASS}
          />
        </Grid>
      </Grid >
    </Grid>
  )
}
