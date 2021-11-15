import Grid from "@mui/material/Grid";
import ArtistCard from "./ArtistCard";
import { makeStyles } from "@material-ui/core/styles";
import RoyaCard from "./images/roya.jpg";
import PersianEmpireCard from "./images/persian.jpg";
import EmbryoCard from "./images/embryo.jpg";
import MakanCard from "./images/makan.jpg";
import PeymanCard from "./images/peyman.jpg";
import { useIntl } from "react-intl";
import { EMBRYO, PERSIAN, ROYA, MAKAN } from "./const/tickets";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

export default function Cards() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      className={classes.root}
    >
      <Grid item>
        <ArtistCard
          title={intl.formatMessage({ id: "embryo" })}
          image={EmbryoCard}
          description1={intl.formatMessage({ id: "embryo-date" })}
          description2={intl.formatMessage({ id: "embryo-venue" })}
          linkToTicket={EMBRYO}
          linkToArtist={"/artists#embryo"}
        />
      </Grid>
      <Grid item>
        <ArtistCard
          title={intl.formatMessage({ id: "persian-empire" })}
          image={PersianEmpireCard}
          description1={intl.formatMessage({ id: "persian-date" })}
          description2={intl.formatMessage({ id: "persian-venue" })}
          linkToTicket={PERSIAN}
          linkToArtist={"/artists#persian-empire"}
        />
      </Grid>
      <Grid item>
        <ArtistCard
          title={intl.formatMessage({ id: "peyman" })}
          image={PeymanCard}
          description1={intl.formatMessage({ id: "persian-date" })}
          description2={intl.formatMessage({ id: "persian-venue" })}
          linkToTicket={PERSIAN}
          linkToArtist={"/artists#peyman"}
        />
      </Grid>
      <Grid item>
        <ArtistCard
          title={intl.formatMessage({ id: "roya" })}
          image={RoyaCard}
          description1={intl.formatMessage({ id: "roya-date" })}
          description2={intl.formatMessage({ id: "roya-venue" })}
          linkToTicket={ROYA}
          linkToArtist={"/artists#roya"}
        />
      </Grid>
      <Grid item>
        <ArtistCard
          title={intl.formatMessage({ id: "makan" })}
          image={MakanCard}
          description1={intl.formatMessage({ id: "makan-date" })}
          description2={intl.formatMessage({ id: "makan-venue" })}
          linkToTicket={MAKAN}
          linkToArtist={"/artists#makan"}
        />
      </Grid>
    </Grid>
  );
}
