import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 3, 3, 3),
  },
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 0.5, 0.5, 0),
  },
  title: {
    margin: 0,
    padding: theme.spacing(1, 0, 0, 0),
  },
}));

export default function FestivalPass() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      id="festivalpass"
      className={classes.root}
      container
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          variant="h5"
        >
          {intl.formatMessage({ id: "festival-pass" })}
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="textPrimary" gutterBottom>
          {intl.formatMessage({ id: "festival-pass-des" })}
        </Typography>
      </Grid>
    </Grid>
  );
}
