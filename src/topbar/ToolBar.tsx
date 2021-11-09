import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { Grid } from "@material-ui/core";
import { Langs } from "../App";
import PagesList from "./PagesList";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      "&.MuiToolbar-root": {
        display: "none",
      },
    },
  },
  lang: {
    minWidth: 0,
    "&.MuiButton-text": {
      color: theme.palette.primary.light,
    },
  },
  selectedLang: {
    minWidth: 0,
    "&.MuiButton-text": {
      color: theme.palette.secondary.main,
    },
  },
  button: {
    margin: theme.spacing(1),
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

  return (
    <Toolbar className={classes.toolbar}>
      <Button
        color="inherit"
        onClick={() => {
          history.push("/");
        }}
        sx={{ flexShrink: 0 }}
        className={classes.button}
      >
        <Typography variant="h5">
          {intl.formatMessage({ id: "seem-festival" })}
        </Typography>
      </Button>

      {PagesList.map((item) => {
        return (
          <Button
            color="inherit"
            onClick={() => {
              history.push(item.link);
            }}
            sx={{ flexShrink: 0 }}
            className={classes.button}
          >
            <Typography variant="subtitle1">
              {intl.formatMessage({ id: item.titleId })}
            </Typography>
          </Button>
        );
      })}

      <Grid
        container
        direction="row"
        spacing={0}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Button
            className={lang === "de" ? classes.selectedLang : classes.lang}
            onClick={() => onLangChange("de")}
          >
            {intl.formatMessage({ id: "de" })}
          </Button>
        </Grid>
        <Grid item>
          <Typography>{"|"}</Typography>
        </Grid>
        <Grid item>
          <Button
            className={lang === "en" ? classes.selectedLang : classes.lang}
            onClick={() => onLangChange("en")}
          >
            {intl.formatMessage({ id: "en" })}
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
