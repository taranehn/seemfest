import React from 'react';
import Carousel from 'react-material-ui-carousel'
import EmryoHomePage from './images/home-page-embryo-4.jpg'
import RoyaHomePage from './images/home-page-roya-4.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Slide from './Slide';

const useStyles = makeStyles((theme) => ({
    carousel: {
        padding: 0,
        margin: 0,
        backgroundColor: '#404040',
        height: "70vh",
        width: "100vw"
    },
}));

export default function SideShow() {
    const classes = useStyles();
    return (
        <Carousel reverseEdgeAnimationDirection stopAutoPlayOnHover timeout={10} interval={2000} className={classes.carousel} animation={"fade"} indicators={false} navButtonsAlwaysVisible={true}>
            <Slide image={EmryoHomePage} />
            <Slide image={RoyaHomePage} />
        </Carousel>
    )
}