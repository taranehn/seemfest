import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";
import Chart from "../components/Chart";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 0.5, 0.5, 0),
  },
  title: {
    margin: 0,
    padding: theme.spacing(1, 2, 1, 0),
  },
  chart: {
    margin: theme.spacing(5),
  },
}));

export default function SupportUs() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      className={classes.root}
      container
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          spacing={0}
          alignItems="center"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
            >
              {intl.formatMessage({ id: "support-us" })}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line" }}
          gutterBottom
        >
          {intl.formatMessage({ id: "support-des" })}
        </Typography>

        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            spacing={1}
            alignItems="flex-start"
          >
            <Grid item>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h5"
              >
                {intl.formatMessage({ id: "chart-title" })}
              </Typography>
            </Grid>
            <Grid className={classes.chart} item>
              <Chart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
