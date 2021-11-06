import Grid from '@mui/material/Grid';
import EventCard from './EventCard';
import { makeStyles } from '@material-ui/core/styles';
import RoyaCard from './images/Roya-1.jpg';
import PersianEmpireCard from './images/persian-empire-card-2.png';
import EmbryoCard from './images/embryo-card.jpg';
import MakanCard from './images/makan-card-5.png';
import { useIntl } from 'react-intl';
import { EMBRYO, PERSIAN, ROYA, MAKAN } from './const/tickets';

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
                <EventCard title={intl.formatMessage({ id: "embryo" })}
                    image={EmbryoCard}
                    description1={intl.formatMessage({ id: "embryo-date" })}
                    description2={intl.formatMessage({ id: "embryo-venue" })}
                    linkToTicket={EMBRYO}
                    linkToArtist={'/artists#embryo'} />
            </Grid>
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "persian-empire" })}
                    image={PersianEmpireCard}
                    description1={intl.formatMessage({ id: "persian-date" })}
                    description2={intl.formatMessage({ id: "persian-venue" })}
                    linkToTicket={PERSIAN}
                    linkToArtist={'/artists#persian-empire'} />
            </Grid>
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "roya" })}
                    image={RoyaCard}
                    description1={intl.formatMessage({ id: "roya-date" })}
                    description2={intl.formatMessage({ id: "roya-venue" })}
                    linkToTicket={ROYA}
                    linkToArtist={'/artists#roya'} />
            </Grid>
            <Grid item>
                <EventCard title={intl.formatMessage({ id: "makan" })}
                    image={MakanCard}
                    description1={intl.formatMessage({ id: "makan-date" })}
                    description2={intl.formatMessage({ id: "makan-venue" })}
                    linkToTicket={MAKAN}
                    linkToArtist={'/artists#makan'} />
            </Grid>
        </Grid>
    );
}
