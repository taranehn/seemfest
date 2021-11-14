import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.primary.light,
  },
  action: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    justifyContent: "end",
  },
  button: {
    minWidth: 0,
    color: theme.palette.secondary.main,
    padding: theme.spacing(0, 2),
  },
  card: {
    height: theme.spacing(50),
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(35),
    },
  },
}));

interface ArtistCardProps {
  image: string;
  title: string;
  description1: string;
  description2: string;
  linkToTicket: string;
  linkToArtist: string;
}

export default function ArtistCard({
  image,
  title,
  description1,
  description2,
  linkToTicket,
  linkToArtist,
}: ArtistCardProps) {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Card sx={{ maxWidth: 400 }} raised={true}>
      <CardMedia
        component="img"
        alt="green iguana"
        className={classes.card}
        image={image}
      />
      <CardContent className={classes.content}>
        <Typography
          color="text.secondary"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {description1}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {description2}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button className={classes.button} size="small" href={linkToArtist}>
          {intl.formatMessage({ id: "more" })}
        </Button>
        <Button
          className={classes.button}
          size="small"
          href={linkToTicket}
          target="_blank"
        >
          {intl.formatMessage({ id: "ticket" })}
        </Button>
      </CardActions>
    </Card>
  );
}
