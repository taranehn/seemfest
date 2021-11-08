import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "./Slide";
import EmryoHomePage from "./images/home-page-embryo-5.jpg";
import RoyaHomePage from "./images/home-page-roya-5.jpg";
import PEHomePage from "./images/home-page-PE-5.jpg";
import MakanHomePage from "./images/home-page-makan-5.jpg";

const useStyles = makeStyles((theme) => ({
  carousel: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palette.primary.dark,
    height: "70vh",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "40vh",
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
      interval={10000}
      className={classes.carousel}
      animation={"fade"}
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      <Slide image={EmryoHomePage} />
      <Slide image={PEHomePage} />
      <Slide image={RoyaHomePage} />
      <Slide image={MakanHomePage} />
    </Carousel>
  );
}
