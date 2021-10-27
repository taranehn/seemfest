import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    }
}));

interface ItemProps {
    image: string;
}

export default function AboutUs({ image }: ItemProps) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <FormattedMessage
                id="about-us"
            />
        </Paper>
    )
}
