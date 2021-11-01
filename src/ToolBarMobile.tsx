import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Drawer, Grid, List, ListItem } from '@material-ui/core';
import { Langs } from './App';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('sm')]: {
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
    },
    item: {
        padding: 0,
        margin: 0,
      //  maxWidth: '50px',
    },
    button: {
        color: theme.palette.primary.dark,
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

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            setMobileOpen(!mobileOpen);
        };

    return (
        <Toolbar className={classes.toolbar} >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>

            <Typography variant="h5" component="div" sx={{ flexShrink: 0 }}
                onClick={() => { history.push("/") }}>
                {intl.formatMessage({ id: "seem-festival" })}
            </Typography>

            <Drawer
                anchor={'left'}
                open={mobileOpen}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <ListItem>
                        <Grid container
                            direction="row"
                            spacing={0}
                            justifyContent="flex-end"
                            alignItems="center">
                            <Grid item className={classes.item}>
                                <Button className={lang === "de" ? classes.selectedLang : classes.lang}
                                    onClick={() => onLangChange("de")} >
                                    {intl.formatMessage({ id: "de" })}
                                </Button>
                            </Grid>
                            <Grid item className={classes.item}>
                                <Typography>
                                    {'|'}
                                </Typography>
                            </Grid>
                            <Grid item className={classes.item}>
                                <Button className={lang === "en" ? classes.selectedLang : classes.lang}
                                    onClick={() => onLangChange("en")} >
                                    {intl.formatMessage({ id: "en" })}
                                </Button>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem button
                        className={classes.button}
                        onClick={() => { history.push("/programs") }}>
                        {intl.formatMessage({ id: "programs" })}
                    </ListItem>
                    <ListItem button
                        className={classes.button}
                        onClick={() => { history.push("/aboutus") }}>
                        {intl.formatMessage({ id: "about-us" })}
                    </ListItem>
                </List>
            </Drawer>
        </Toolbar >
    );
}
