import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Roya2 from './images/Roya-2.jpg'
import Roya3 from './images/Roya-3.jpg'
import Sam1 from './images/Sam-1.jpeg'
import Sam2 from './images/Sam-2.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Slide from './Slide';

const useStyles = makeStyles((theme) => ({
    carousel: {
        padding: 0,
        margin: 0,
        backgroundColor: '#FF6200',
        height: "75vh",
        width: "100vw"
    },
}));

export default function SideShow() {
    const classes = useStyles();

    {
        return (
            <Carousel className={classes.carousel} indicators={false} navButtonsAlwaysVisible={true}>
                <Slide image={Roya3} />
                <Slide image={Sam2} />
                <Slide image={Roya2} />
                <Slide image={Sam1} />
            </Carousel>
        )
    }
}