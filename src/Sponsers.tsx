import { Grid, IconButton, SvgIcon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";
import { ReactComponent as EinsteinKultur } from "./logos/Einstein-Kultur.svg";
import { ReactComponent as ImportExport } from "./logos/Import-Export.svg";
import { ReactComponent as NorouziLaw } from "./logos/Norouzi-Law.svg";
import { ReactComponent as GoetheInstitut } from "./logos/Goethe-Institut.svg";
import { ReactComponent as GeniusUnited } from "./logos/Genius-United.svg";
import { ReactComponent as FeierwerkFunkstation } from "./logos/Feierwerk-Funkstation.svg";
import { ReactComponent as CinemaIran } from "./logos/Cinema-Iran.svg";
import { ReactComponent as PatoghStrock } from "./logos/Patogh-Strock.svg";
import { ReactComponent as AuswaaertigesAmt } from "./logos/Auswaaertiges-Amt.svg";
import { ReactComponent as MUCCAICON } from "./logos/MUCCA.svg";
import { ReactComponent as ReplyAG } from "./logos/Reply-AG.svg";
import { ReactComponent as Shahed } from "./logos/Shahed.svg";
import { ReactComponent as KulturReferat } from "./logos/Kultur-Referat.svg";
import {
  MUCCA,
  REPLY,
  PATOGH,
  NOROUZI,
  IMPORTEXPORT,
  GOETHE,
  GENIUS,
  FEIERWEK,
  EINSTEIN,
  CINEMAIRAN,
  AUSWEARTIGESAMT,
  SHAHED,
  KULTUR,
} from "./const/sponsers";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 2, 0, 0),
  },
  title: {
    margin: 0,
    padding: theme.spacing(1, 2, 0, 0),
  },
  svg: {
    fill: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    margin: theme.spacing(0, 0, 0.5, 0),
    width: "100px",
    height: "100px",
  },
  svgL: {
    fill: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    margin: theme.spacing(0, 0, 0.5, 0),
    width: "120px",
    height: "120px",
  },
  svgXL: {
    fill: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    margin: theme.spacing(0, 0, 0.5, 0),
    width: "140px",
    height: "140px",
  },
}));

export default function Sponsers() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <Grid
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
              {intl.formatMessage({ id: "organisation" })}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton className={classes.icon} href={PATOGH} target="_blank">
              <SvgIcon className={classes.svg}>
                <PatoghStrock />
              </SvgIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
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
              {intl.formatMessage({ id: "sponsers" })}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={0}
              alignItems="center"
            >
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={REPLY}
                  target="_blank"
                >
                  <SvgIcon className={classes.svgL}>
                    <ReplyAG />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={GOETHE}
                  target="_blank"
                >
                  <SvgIcon className={classes.svg}>
                    <GoetheInstitut />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={AUSWEARTIGESAMT}
                  target="_blank"
                >
                  <SvgIcon className={classes.svgXL}>
                    <AuswaaertigesAmt />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={GENIUS}
                  target="_blank"
                >
                  <SvgIcon className={classes.svg}>
                    <GeniusUnited />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={KULTUR}
                  target="_blank"
                >
                  <SvgIcon className={classes.svgXL}>
                    <KulturReferat />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={NOROUZI}
                  target="_blank"
                >
                  <SvgIcon className={classes.svg}>
                    <NorouziLaw />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={SHAHED}
                  target="_blank"
                >
                  <SvgIcon className={classes.svg}>
                    <Shahed />
                  </SvgIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
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
              {intl.formatMessage({ id: "collaborators" })}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={0}
              alignItems="center"
            >
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={EINSTEIN}
                  target="_blank"
                >
                  <SvgIcon className={classes.svgL}>
                    <EinsteinKultur />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={IMPORTEXPORT}
                  target="_blank"
                >
                  <SvgIcon className={classes.svg}>
                    <ImportExport />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={FEIERWEK}
                  target="_blank"
                >
                  <SvgIcon className={classes.svgXL}>
                    <FeierwerkFunkstation />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={CINEMAIRAN}
                  target="_blank"
                >
                  <SvgIcon className={classes.svg}>
                    <CinemaIran />
                  </SvgIcon>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={classes.icon}
                  href={MUCCA}
                  target="_blank"
                >
                  <SvgIcon className={classes.svgL}>
                    <MUCCAICON />
                  </SvgIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
