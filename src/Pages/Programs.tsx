import * as React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useIntl } from "react-intl";
import RoyaPoster from "../images/roya-poster.jpg";
import MakanPoster from "../images/makan-poster.jpg";
import ElectroPoster from "../images/electro-poster.jpg";
import EmbryoPoster from "../images/embryo-poster.jpg";
import PersianPoster from "../images/persian-poster.jpg";
import YaldaPoster from "../images/yalda-poster.jpeg";
import ProgramCard from "../components/ProgramCard";
import {
  MUCCA,
  FEIERWEK,
  EINSTEINKULTUR,
  IMPORTEXPORT,
} from "../const/addresses";
import {
  EMBRYO,
  PERSIAN,
  ROYA,
  FESTIVALPASS,
  MAKAN,
  YALDA,
} from "../const/tickets";
import FestivalPass from "../components/FestivalPass";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
    },
  },
}));

export default function Programs() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      className={classes.root}
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
            image={EmbryoPoster}
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
            image={ElectroPoster}
            name={intl.formatMessage({ id: "electro-nacht-names" })}
            time={intl.formatMessage({ id: "persian-time" })}
            date={intl.formatMessage({ id: "persian-date" })}
            venue={intl.formatMessage({ id: "persian-venue" })}
            price={intl.formatMessage({ id: "persian-price" })}
            linkToAddress={MUCCA}
            linkToTicket={PERSIAN}
          />
        </Grid>
      </Grid>
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
            image={MakanPoster}
            name={intl.formatMessage({ id: "makan" })}
            time={intl.formatMessage({ id: "makan-time" })}
            date={intl.formatMessage({ id: "makan-date" })}
            venue={intl.formatMessage({ id: "makan-venue" })}
            price={intl.formatMessage({ id: "makan-price" })}
            linkToAddress={FEIERWEK}
            linkToTicket={MAKAN}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <ProgramCard
            image={YaldaPoster}
            name={intl.formatMessage({ id: "yalda" })}
            time={intl.formatMessage({ id: "yalda-time" })}
            date={intl.formatMessage({ id: "yalda-date" })}
            venue={intl.formatMessage({ id: "yalda-venue" })}
            price={intl.formatMessage({ id: "yalda-price" })}
            linkToAddress={FEIERWEK}
            linkToTicket={YALDA}
          />
        </Grid>
        <Grid item>
          <ProgramCard
            image={PersianPoster}
            name={intl.formatMessage({ id: "festival-pass" })}
            time={intl.formatMessage({ id: "festival-pass-time" })}
            date={intl.formatMessage({ id: "festival-pass-date" })}
            venue={"-"}
            price={intl.formatMessage({ id: "festival-pass-price" })}
            linkToAddress={IMPORTEXPORT}
            linkToTicket={FESTIVALPASS}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <FestivalPass />
      </Grid>
    </Grid>
  );
}
