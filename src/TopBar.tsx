import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Grid } from '@material-ui/core';
import { Langs } from './App';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: '#0D0D0D',
        color: '#FF6200',
    },
    typography: {
        fontFamily: 'lalezar',
    }
}));

interface TopBarProps {
    onLangChange: (lang: Langs) => void;
}

export default function TopBar({ onLangChange }: TopBarProps) {
    const classes = useStyles();
    const history = useHistory();
    const intl = useIntl();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.typography} variant="h5" component="div" sx={{ flexShrink: 0 }}
                        onClick={() => { history.push("/") }}>
                        {intl.formatMessage({ id: "seem-festival" })}
                    </Typography>

                    <Button color="inherit" onClick={() => { history.push("/aboutus") }} component="div" sx={{ flexShrink: 0 }}>
                        {intl.formatMessage({ id: "about-us" })}
                    </Button>

                    <Grid container
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                        alignItems="center">
                        <Grid item>
                            <Typography className={classes.typography} variant="h5" component="div"
                                onClick={() => onLangChange("en")}>
                                {intl.formatMessage({ id: "en" })}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.typography} variant="h5" component="div"
                                onClick={() => { history.push("/") }}>
                                |
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.typography} variant="h5" component="div"
                                onClick={() => onLangChange("de")}>
                                {intl.formatMessage({ id: "de" })}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
