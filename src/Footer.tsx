import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button, Grid } from "@mui/material";
import { useIntl } from "react-intl";
import { PATOGH_WEBSITE } from "./const/links";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
}));

export default function Footer2() {
  const intl = useIntl();
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.primary.light,
        }}
      >
        <Grid
          container
          direction="row"
          columnSpacing={5}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link color="inherit" href={PATOGH_WEBSITE}>
              {intl.formatMessage({ id: "patogh" })}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
          <Button size="small" href={"/impressum"} className={classes.button}>
            <Typography variant="body2" color="text.disabled">
              {intl.formatMessage({ id: "impressum" })}
            </Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
