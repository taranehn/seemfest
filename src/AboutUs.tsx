import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FF6200'
    }
}));

interface ItemProps {
    image: string;
}

export default function AboutUs({ image }: ItemProps) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            About Us
        </Paper>
    )
}
