import Grid from '@mui/material/Grid';
import EventCard from './EventCard';
import { makeStyles } from '@material-ui/core/styles';
import RoyaCard from './images/Roya-1.jpg';
import PersianEmpireCard from './images/PE1.jpg';
import EmbryoCard from './images/embryo-card.jpg';
import MakanCard from './images/makan-card-4.png';
import { useIntl } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1)
    },
}));

export default function Cards() {
    const classes = useStyles();
    const intl = useIntl();

    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            className={classes.root} >
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "embryo" })} image={EmbryoCard} description1={intl.formatMessage({ id: "embryo-date" })} description2={intl.formatMessage({ id: "embryo-venue" })} />
            </Grid>
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "persian-empire" })} image={PersianEmpireCard} description1={intl.formatMessage({ id: "persian-date" })} description2={intl.formatMessage({ id: "persian-venue" })} />
            </Grid>
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "roya" })} image={RoyaCard} description1={intl.formatMessage({ id: "roya-date" })} description2={intl.formatMessage({ id: "roya-venue" })} />
            </Grid>
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "makan" })} image={MakanCard} description1={intl.formatMessage({ id: "makan-date" })} description2={intl.formatMessage({ id: "makan-venue" })} />
            </Grid>
        </Grid>
    );
}
