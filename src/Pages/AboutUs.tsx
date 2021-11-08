import { Grid, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import Telegram from '@mui/icons-material/Telegram';
import { PATOGH_INSTAGRAM, PATOGH_FACEBOOK, PATOGH_YOUTUBE, PATOGH_TELEGRAM, SEEM_INSTAGRAM } from '../const/links';
import Sponsers from '../Sponsers';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    icon: {
        color: theme.palette.secondary.main,
        padding: theme.spacing(0, 0.5, 0.5, 0),
    },
    title: {
        margin: 0,
        padding: theme.spacing(1, 2, 1, 0),
    }
}));

export default function AboutUs() {
    const classes = useStyles();
    const intl = useIntl();

    return (
        <Grid className={classes.root}
            container
            spacing={2}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid item>
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
                            {intl.formatMessage({ id: "seem-festival" })}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                            href={SEEM_INSTAGRAM} target="_blank"  >
                            <Instagram />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography color="textPrimary" gutterBottom >
                    {intl.formatMessage({ id: "seem-des" })}
                </Typography>
            </Grid>

            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    spacing={0}
                    alignItems="center"
                >
                    <Grid item>
                        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5">
                            {intl.formatMessage({ id: "patogh" })}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                            href={PATOGH_FACEBOOK} target="_blank"  >
                            <Facebook />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                            href={PATOGH_INSTAGRAM} target="_blank"  >
                            <Instagram />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                            href={PATOGH_YOUTUBE} target="_blank"  >
                            <YouTube />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                            href={PATOGH_TELEGRAM} target="_blank"  >
                            <Telegram />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography color="textPrimary" gutterBottom >
                    {intl.formatMessage({ id: "patogh-des" })}
                </Typography>
            </Grid>

            <Grid item>
                <Sponsers />
            </Grid >
        </Grid >
    )
}
