import { Grid, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { PieChart } from "react-minimal-pie-chart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chart: {
    maxWidth: "60%",
  },
}));

export default function Chart() {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      spacing={8}
      alignItems="center"
    >
      <Grid className={classes.chart} item>
        <PieChart
          label={({ x, y, dx, dy, dataEntry }) => (
            <text
              style={{ fill: dataEntry.color, fontSize: "0.5rem" }}
              x={x}
              y={y}
              dx={dx}
              dy={dy}
              dominant-baseline="central"
              text-anchor="middle"
            >
              {dataEntry.title}
            </text>
          )}
          center={[50, 50]}
          data={[
            {
              color: "#DD5613",
              title: "B",
              value: 6,
            },
            {
              color: "#FFA500",
              title: "C",
              value: 32,
            },
            {
              color: "#DD5613",
              title: "D",
              value: 12,
            },
            /*            {
                         color: "#E38627",
                         title: "E",
                         value: 0,
                       }, */
            {
              color: "#FFA500",
              title: "A",
              value: 50,
            },
          ]}
          labelPosition={70}
          lengthAngle={360}
          lineWidth={15}
          paddingAngle={0}
          radius={50}
          rounded
          startAngle={0}
          viewBoxSize={[100, 100]}
        />
      </Grid>
      <Grid item>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#FFA500" }}
          gutterBottom
        >
          A: {intl.formatMessage({ id: "grant" })}
        </Typography>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#DD5613" }}
          gutterBottom
        >
          B: {intl.formatMessage({ id: "donation" })}
        </Typography>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#FFA500" }}
          gutterBottom
        >
          C: {intl.formatMessage({ id: "sponsorship" })}
        </Typography>
        {/*         <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#FFBF00" }}
          gutterBottom
        >
          E: {intl.formatMessage({ id: "self-funding" })}
        </Typography> */}
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#DD5613" }}
          gutterBottom
        >
          D: {intl.formatMessage({ id: "tickets" })}
        </Typography>
      </Grid>
    </Grid>
  );
}
