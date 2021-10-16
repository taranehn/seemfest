import Grid from '@mui/material/Grid';
import Cards from './Cards';
import SlideShow from './SlideShow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FF6200'
    },
}));

export default function Content() {
    const classes = useStyles();
    
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            className={classes.root} >
            <Grid item>
                <SlideShow />
            </Grid>
            <Grid item>
                <Cards />
            </Grid>
        </Grid>
    );
}
