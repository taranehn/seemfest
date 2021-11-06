import * as React from 'react';
import { Grid, IconButton, makeStyles, SvgIcon, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import Web from '@mui/icons-material/Web';
import { MAKAN_WEBSITE, MAKAN_INSTAGRAM, MAKAN_SOUNDCOUD } from '../const/artists';
import YouTube from 'react-youtube';
import Instagram from '@mui/icons-material/Instagram';
import { ReactComponent as Soundcloud } from '../icons/soundcloud.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: theme.spacing(1, 2, 1, 0),
  },
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 0.5, 0.5, 0),
  },
  svg: {
    fill: theme.palette.secondary.main,
    margin: theme.spacing(1, 0, 0.5, 0),
    width: '24px',
    height: '24px'
  },
}));

export default function Persian() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid id="makan"
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
                {intl.formatMessage({ id: "makan" })}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}
                href={MAKAN_WEBSITE} target="_blank"  >
                <Web />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}
                href={MAKAN_INSTAGRAM} target="_blank"  >
                <Instagram />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton className={classes.icon}
                href={MAKAN_INSTAGRAM} target="_blank"  >
                <SvgIcon className={classes.svg}  >
                  <Soundcloud />
                </SvgIcon>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href={MAKAN_SOUNDCOUD} target="_blank"   >
                <SvgIcon className={classes.svg}  >
                  <path d="M 30 11 C 26.398438 11 23 12.789063 21 15.6875 L 21 36 L 42.5 36 C 46.601563 36 50 32.601563 50 28.5 C 50 24.398438 46.601563 21 42.5 21 C 42 21 41.5 21.085938 41 21.1875 C 40.5 15.488281 35.800781 11 30 11 Z M 17 16 C 16.300781 16 15.601563 16.085938 15 16.1875 L 15 36 L 17 36 Z M 18 16 L 18 36 L 20 36 L 20 16.5 C 19.398438 16.300781 18.699219 16.101563 18 16 Z M 14 16.5 C 13.300781 16.800781 12.601563 17.101563 12 17.5 L 12 36 L 14 36 Z M 11 18.3125 C 10.199219 19.011719 9.5 19.90625 9 20.90625 L 9 36 L 11 36 Z M 6.5 22 C 6.324219 22.011719 6.148438 22.042969 6 22.09375 L 6 35.90625 C 6.300781 36.007813 6.699219 36 7 36 L 8 36 L 8 22.09375 C 7.699219 21.992188 7.300781 22 7 22 C 6.851563 22 6.675781 21.988281 6.5 22 Z M 5 22.3125 C 4.300781 22.511719 3.601563 22.8125 3 23.3125 L 3 34.6875 C 3.601563 35.085938 4.300781 35.488281 5 35.6875 Z M 2 24.09375 C 0.800781 25.394531 0 27.101563 0 29 C 0 30.898438 0.800781 32.605469 2 33.90625 Z" />
                </SvgIcon>
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            <Typography color="textPrimary" style={{ whiteSpace: 'pre-line' }} gutterBottom >
              {intl.formatMessage({ id: "makan-des" })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} md={6} item>
        <YouTube videoId="wnlsk39nPCA" />
      </Grid>
    </Grid>

  )
}
