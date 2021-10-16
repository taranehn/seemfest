import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: '#0D0D0D',
        color: '#FF6200',
    },
    typography: {
        fontFamily: 'lalezar',
    }
}));

export default function TopBar() {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push("/aboutus");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar} >
                    <Typography className={classes.typography} variant="h5" component="div" sx={{ flexGrow: 1 }}
                        onClick={() => { history.push("/")}}>
                        SEEM | Festival
                    </Typography>
                    <Button color="inherit" onClick={() => { history.push("/aboutus") }}>About us</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
