import * as React from "react";
import {
  Grid,
  IconButton,
  makeStyles,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import {
  ROODY_INSTAGRAM,
  ROODY_YOUTUBE,
  ROODY_SPOTIFY,
  ROODY_SOUNDCOUD,
} from "../const/artists";
import YouTube from "react-youtube";
import YouTubeIcone from "@mui/icons-material/YouTube";
import Instagram from "@mui/icons-material/Instagram";
import { ReactComponent as Soundcloud } from "../icons/soundcloud.svg";
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
  soundcoud: {
    padding: theme.spacing(0),
    width: "25px",
    height: "25px",
  },
}));

export default function Roody() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      id="roody"
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
                {intl.formatMessage({ id: "roody" })}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={ROODY_INSTAGRAM}
                target="_blank"
              >
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={ROODY_YOUTUBE}
                target="_blank"
              >
                <YouTubeIcone />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={ROODY_SPOTIFY}
                target="_blank"
              >
                <SvgIcon className={classes.spotify}>
                  <Spotify />
                </SvgIcon>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={ROODY_SOUNDCOUD}
                target="_blank"
              >
                <SvgIcon className={classes.soundcoud}>
                  <Soundcloud />
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
              {intl.formatMessage({ id: "roody-des" })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} md={6} item>
        <YouTube videoId="sGpFYdPMjP8" />
      </Grid>
    </Grid>
  );
}
