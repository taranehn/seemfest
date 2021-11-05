import * as React from 'react';
import { Grid, IconButton, makeStyles, SvgIcon, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import Web from '@mui/icons-material/Web';
import { ROYA_SPOTIFY, ROYA_WEBSITE } from '../const/artists';
import YouTube from 'react-youtube';
import spotify from '../icons/spotify.png';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(1, 2, 1, 0),
  },
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 0.5, 0.5, 0),
  },
}));

export default function Persian() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid id="roya"
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
              <Typography className={classes.title}
                color="textSecondary" gutterBottom variant="h5">
                {intl.formatMessage({ id: "roya" })}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}
                href={ROYA_WEBSITE} target="_blank"  >
                <Web />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}
                href={ROYA_SPOTIFY} target="_blank"  >
                <SvgIcon >
                  {spotify}
                </SvgIcon>
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            <Typography color="textPrimary" style={{ whiteSpace: 'pre-line' }} gutterBottom >
              {intl.formatMessage({ id: "roya-des" })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} md={6} item>
        <YouTube videoId="theNKPjv_z8" />
      </Grid>
    </Grid>

  )
}
