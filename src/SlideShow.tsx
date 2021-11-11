import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "./Slide";
import EmryoHomePage from "./images/embryo-banner.jpg";
import RoyaHomePage from "./images/roya-banner.jpg";
import PEHomePage from "./images/makan-banner.jpg";
import MakanHomePage from "./images/electro-banner.jpg";

const useStyles = makeStyles((theme) => ({
  carousel: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palette.primary.dark,
    height: "35vh",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "10vh",
    },
  },
}));

export default function SideShow() {
  const classes = useStyles();
  return (
    <Carousel
      reverseEdgeAnimationDirection
      stopAutoPlayOnHover
      timeout={10}
      interval={7500}
      className={classes.carousel}
      animation={"fade"}
      indicators={false}
      navButtonsAlwaysVisible={false}
    >
      <Slide image={EmryoHomePage} />
      <Slide image={PEHomePage} />
      <Slide image={RoyaHomePage} />
      <Slide image={MakanHomePage} />
    </Carousel>
  );
}
