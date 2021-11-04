import * as React from 'react';
import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import Web from '@mui/icons-material/Web';
import { EMBRYO_WEBSITE } from '../const/artists';
import YouTube from 'react-youtube';

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

export default function Embryo() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid id="embryo"
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
                {intl.formatMessage({ id: "embryo" })}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className={classes.icon}
                href={EMBRYO_WEBSITE} target="_blank"  >
                <Web />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            <Typography color="textPrimary" style={{ whiteSpace: 'pre-line' }} gutterBottom >
              {intl.formatMessage({ id: "embryo-des" })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid xs={12} md={6} item>
        <YouTube videoId="EqVASJNerkk" />
      </Grid>
    </Grid>

  )
}