import { Grid, IconButton, SvgIcon, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { ReactComponent as EINSTEINKULTUR } from './logos/Einstein-Kultur.svg';
import { ReactComponent as ImportExport } from './logos/Import-Export.svg';
import { ReactComponent as NorouziLaw } from './logos/Norouzi-Law.svg';
import { ReactComponent as GoetheInstitut } from './logos/Goethe-Institut.svg';
import { ReactComponent as GeniusUnited } from './logos/Genius-United.svg';
import { ReactComponent as FeierwerkFunkstation } from './logos/Feierwerk-Funkstation.svg';
import { ReactComponent as CinemaIran } from './logos/Cinema-Iran.svg';
import { ReactComponent as PatoghStrock } from './logos/Patogh-Strock.svg';
import { ReactComponent as AuswaaertigesAmt } from './logos/Auswärtiges-Amt.svg';
import { ReactComponent as MUCCA } from './logos/MUCCA.svg';
import { ReactComponent as ReplyAG } from './logos/Reply-AG.svg';
import { ReactComponent as KulturReferat } from './logos/Kultur-Referat.svg';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.secondary.main,
        padding: theme.spacing(0, 1, 0, 0),
    },
    title: {
        margin: 0,
        padding: theme.spacing(1, 2, 0, 0),
    },
    svg: {
        fill: theme.palette.secondary.main,
        color: theme.palette.secondary.main,
        margin: theme.spacing(0, 0, 0.5, 0),
        width: '100px',
        height: '100px'
    }
}));

export default function Sponsers() {
    const classes = useStyles();
    const intl = useIntl();

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid item>
                <Typography className={classes.title}
                    color="textSecondary" gutterBottom variant="h5">
                    {intl.formatMessage({ id: "collaborators" })}
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
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                <EINSTEINKULTUR />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < ImportExport />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < NorouziLaw />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                <GoetheInstitut />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < GeniusUnited />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < FeierwerkFunkstation />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < CinemaIran />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < PatoghStrock />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                <AuswaaertigesAmt />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < MUCCA />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < ReplyAG />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.icon}
                        /*   href={EINSTEINKULTUR} target="_blank" */
                        >
                            <SvgIcon className={classes.svg} >
                                < KulturReferat />
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
