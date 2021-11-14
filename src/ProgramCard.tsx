import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  IconButton,
  Link,
  makeStyles,
} from "@material-ui/core";
import { useIntl } from "react-intl";
import AccessTime from "@mui/icons-material/AccessTime";
import Place from "@mui/icons-material/Place";
import Euro from "@mui/icons-material/Euro";
import EventAvailable from "@mui/icons-material/EventAvailable";

const useStyles = makeStyles((theme) => ({
  card: {
    border: `0.25px solid ${theme.palette.primary.light}`,
    borderRadius: 0,
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    width: theme.spacing(50),
    [theme.breakpoints.down("md")]: {
      width: "60vw",
    },
  },
  button: {
    color: theme.palette.primary.main,
  },
  iconbutton: {
    padding: 0,
    paddingRight: theme.spacing(0.5),
    color: theme.palette.primary.light,
  },
  icon: {
    fontSize: theme.spacing(2.5),
  },
  link: {
    color: theme.palette.primary.light,
  },
  action: {
    margin: theme.spacing(0, 1.5, 1.5, 0),
    display: "flex",
    justifyContent: "end",
  },
  content: {
    padding: theme.spacing(2),
  },
  image: {
    width: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      width: "40vw",
    },
  },
}));

interface ItemProps {
  image: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  linkToAddress: string;
  linkToTicket: string;
}

export default function Programs({
  image,
  name,
  date,
  time,
  venue,
  price,
  linkToAddress,
  linkToTicket,
}: ItemProps) {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <React.Fragment>
      <Card
        className={classes.card}
        sx={{ display: "flex" }}
        elevation={0}
        square
      >
        <CardMedia component="img" className={classes.image} image={image} />
        <Box className={classes.box}>
          <CardContent sx={{ flex: "1 0 auto" }} className={classes.content}>
            <Typography color="text.secondary" component="div" variant="h5">
              {name}
            </Typography>

            <Typography variant="subtitle1" component="div">
              <IconButton className={classes.iconbutton}>
                <EventAvailable className={classes.icon} />
              </IconButton>
              {date}
            </Typography>

            <Typography variant="subtitle1" component="div">
              <IconButton className={classes.iconbutton}>
                <AccessTime className={classes.icon} />
              </IconButton>
              {time}
            </Typography>

            <Typography variant="subtitle1" component="div">
              <IconButton className={classes.iconbutton}>
                <Place className={classes.icon} />
              </IconButton>
              <Link
                className={classes.link}
                href={linkToAddress}
                target="_blank"
                underline="hover"
              >
                {venue}
              </Link>
            </Typography>

            <Typography variant="subtitle1" component="div">
              <IconButton className={classes.iconbutton}>
                <Euro className={classes.icon} />
              </IconButton>
              {price}
            </Typography>
          </CardContent>
          <CardActions className={classes.action}>
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              href={linkToTicket}
              target="_blank"
            >
              {intl.formatMessage({ id: "ticket" })}
            </Button>
          </CardActions>
        </Box>
      </Card>
    </React.Fragment>
  );
}
