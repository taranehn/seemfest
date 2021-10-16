import Grid from '@mui/material/Grid';
import EventCard from './EventCard';
import { makeStyles } from '@material-ui/core/styles';
import Roya1 from './images/Roya-1.jpg'
import PE1 from './images/PE1.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px",
        backgroundColor: '#FF6200'
    },
}));

export default function Cards() {
    const classes = useStyles();
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            className={classes.root} >
            <Grid item>
                <EventCard title={"Roya"} image={Roya1} description={"Roya Joon Arab"} />
            </Grid>
            <Grid item>
                <EventCard title={"Persian Empire"} image={PE1} description={"Peeer"} />
            </Grid>
            <Grid item >
                <EventCard title={"Roya"} image={Roya1} description={"Roya Joon Arab"} />
            </Grid>
            <Grid item>
                <EventCard title={"Persian Empire"} image={PE1} description={"Peeer"} />
            </Grid>
        </Grid>
    );
}
