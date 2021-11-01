import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 4),
    }
}));

interface ItemProps {
    image: string;
}

export default function AboutUs({ image }: ItemProps) {
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
                <Typography color="textSecondary" gutterBottom variant="h5">
                    {intl.formatMessage({ id: "seem-festival" })}
                </Typography>
                <Typography color="textPrimary" gutterBottom >
                    {intl.formatMessage({ id: "seem-des" })}
                </Typography>
            </Grid>
            <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h5">
                    {intl.formatMessage({ id: "patogh" })}
                </Typography>
                <Typography color="textPrimary" gutterBottom >
                    {intl.formatMessage({ id: "patogh-des" })}
                </Typography>
            </Grid>
        </Grid >
    )
}
