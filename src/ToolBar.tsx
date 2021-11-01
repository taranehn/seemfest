import * as React from 'react';
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
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            "&.MuiToolbar-root": {
                display: 'none'
            },
        },
    },
    lang: {
        "&.MuiButton-text": {
            color: theme.palette.primary.light,
        },
    },
    selectedLang: {
        "&.MuiButton-text": {
            color: theme.palette.secondary.main,
        },
    }
}));

interface TopBarProps {
    onLangChange: (lang: Langs) => void;
    lang: Langs;
}

export default function TopBar({ onLangChange, lang }: TopBarProps) {
    const classes = useStyles();
    const history = useHistory();
    const intl = useIntl();

    return (
        <Toolbar className={classes.toolbar}>
            <Button color="inherit" onClick={() => { history.push("/") }} component="div" sx={{ flexShrink: 0 }}>
                <Typography variant="h5" >
                    {intl.formatMessage({ id: "seem-festival" })}
                </Typography>
            </Button>
            <Button color="inherit" onClick={() => { history.push("/programs") }} component="div" sx={{ flexShrink: 0 }}>
                {intl.formatMessage({ id: "programs" })}
            </Button>

            <Button color="inherit" onClick={() => { history.push("/aboutus") }} component="div" sx={{ flexShrink: 0 }}>
                {intl.formatMessage({ id: "about-us" })}
            </Button>

            <Grid container
                direction="row"
                spacing={0}
                justifyContent="flex-end"
                alignItems="center">
                <Grid item>
                    <Button className={lang === "de" ? classes.selectedLang : classes.lang}
                        onClick={() => onLangChange("de")} >
                        {intl.formatMessage({ id: "de" })}
                    </Button>
                </Grid>
                <Grid item>
                    <Typography>
                        {'|'}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button className={lang === "en" ? classes.selectedLang : classes.lang}
                        onClick={() => onLangChange("en")} >
                        {intl.formatMessage({ id: "en" })}
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
    );
}
