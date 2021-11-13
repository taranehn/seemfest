import * as React from "react";
import {
  Grid,
  IconButton,
  makeStyles,
  Typography,
  SvgIcon,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import Web from "@mui/icons-material/Web";
import { EMBRYO_WEBSITE, EMBRYO_SPOTIFY } from "../const/artists";
import YouTube from "react-youtube";
import { ReactComponent as Spotify } from "../icons/spotify.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(1, 2, 1, 0),
  },
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 0.5, 0.5, 0),
  },
  spotify: {
    margin: theme.spacing(0.5, 0, 0, 0.25),
    padding: theme.spacing(0, 0.5, 0.5, 0),
    width: "25px",
    height: "25px",
  },
}));

export default function Embryo() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      id="embryo"
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid xs={12} md={6} item>
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={0}
            alignItems="center"
          >
            <Grid item>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h5"
              >
                {intl.formatMessage({ id: "embryo" })}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={EMBRYO_WEBSITE}
                target="_blank"
              >
                <Web />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={EMBRYO_SPOTIFY}
                target="_blank"
              >
                <SvgIcon className={classes.spotify}>
                  <Spotify />
                </SvgIcon>
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            <Typography
              color="textPrimary"
              style={{ whiteSpace: "pre-line" }}
              gutterBottom
            >
              {intl.formatMessage({ id: "embryo-des" })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} md={6} item>
        <YouTube videoId="F_pF3MNcmxg" />
      </Grid>
    </Grid>
  );
}
