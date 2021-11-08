import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Drawer, Grid, List, ListItem } from '@material-ui/core';
import { Langs } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PagesList from './PagesList';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.main,
        width: "100%",
        [theme.breakpoints.up('md')]: {
            "&.MuiToolbar-root": {
                display: 'none'
            },
        },
    },
    lang: {
        minWidth: 0,
        "&.MuiButton-text": {
            color: theme.palette.primary.dark,
        },
    },
    selectedLang: {
        minWidth: 0,
        "&.MuiButton-text": {
            color: theme.palette.secondary.main,
        },
    },
    item: {
        color: theme.palette.primary.dark,
        padding:theme.spacing(1),
    },
    button: {
        color: theme.palette.primary.dark,
    },
    drawer: {
        width: '66vw',
    },
    title: {
        paddingTop: theme.spacing(0.5),
    },
}));

interface TopBarProps {
    onLangChange: (lang: Langs) => void;
    lang: Langs;
}

export default function TopBar({ onLangChange, lang }: TopBarProps) {
    const classes = useStyles();
    const history = useHistory();
    const intl = useIntl();

    const [isDrawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <Toolbar className={classes.toolbar} >
            <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
            >
                <MenuIcon />
            </IconButton>

            <Typography variant="h5" component="div" sx={{ flexShrink: 0 }} className={classes.title}
                onClick={() => { history.push("/") }}>
                {intl.formatMessage({ id: "seem-festival" })}
            </Typography>

            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawer
                }}
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
                    {PagesList.map((item) => {
                        return <ListItem button
                            className={classes.button}
                            onClick={() => {
                                history.push(item.link);
                                handleDrawerToggle()
                            }}>
                            {intl.formatMessage({ id: item.titleId })}
                        </ListItem>
                    })}
                </List>
            </Drawer>
        </Toolbar >
    );
}
