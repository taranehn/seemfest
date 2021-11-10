import * as React from "react";
import { Grid, IconButton, makeStyles, Typography, SvgIcon } from "@material-ui/core";
import { useIntl } from "react-intl";
import Web from "@mui/icons-material/Web";
import Instagram from "@mui/icons-material/Instagram";
import { PERSIAN_INSTAGRAM, PERSIAN_WEBSITE, PERSIAN_SOUNDCLOUD } from "../const/artists";
import { ReactComponent as Soundcloud } from "../icons/soundcloud.svg";
import YouTube from "react-youtube";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(1, 2, 1, 0),
  },
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 0.5, 0.5, 0),
  },
  soundcoud: {
    padding: theme.spacing(0),
    width: "25px",
    height: "25px",
  },
}));

export default function Persian() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      id="persian-empire"
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
                {intl.formatMessage({ id: "persian-empire" })}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={PERSIAN_WEBSITE}
                target="_blank"
              >
                <Web />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={PERSIAN_INSTAGRAM}
                target="_blank"
              >
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                className={classes.icon}
                href={PERSIAN_SOUNDCLOUD}
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
              {intl.formatMessage({ id: "persian-des" })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={6} md={6} item>
        <YouTube videoId="OlG3JYunMVo" />
      </Grid>
    </Grid>
  );
}
