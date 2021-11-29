import { Grid, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { PieChart } from "react-minimal-pie-chart";

export default function Chart() {
  const intl = useIntl();

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      spacing={8}
      alignItems="center"
    >
      <Grid item>
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
              color: "#C13C37",
              title: "B",
              value: 9,
            },
            {
              color: "#6A2135",
              title: "C",
              value: 15,
            },
            {
              color: "#91372f",
              title: "D",
              value: 20,
            },
            {
              color: "#E38627",
              title: "A",
              value: 54,
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
          style={{ whiteSpace: "pre-line", color: "#E38627" }}
          gutterBottom
        >
          A: {intl.formatMessage({ id: "grant" })}
        </Typography>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#C13C37" }}
          gutterBottom
        >
          B: {intl.formatMessage({ id: "donation" })}
        </Typography>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#6A2135" }}
          gutterBottom
        >
          C: {intl.formatMessage({ id: "sponsorship" })}
        </Typography>
        <Typography
          color="textPrimary"
          style={{ whiteSpace: "pre-line", color: "#91372f" }}
          gutterBottom
        >
          D: {intl.formatMessage({ id: "self-funding" })}
        </Typography>
      </Grid>
    </Grid>
  );
}