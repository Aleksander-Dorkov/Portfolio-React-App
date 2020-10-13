import React from "react";
import {Grid} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

interface Props {
    imageUrl: string
}

function ProjectImage(props: Props) {
    return (

        <Grid item={true} xs={12} md={12} lg={9}>
            <ScrollAnimation animateIn={'animate__zoomIn'}>
                <img src={props.imageUrl}
                     alt={'not available'}
                     style={{width: '100%', height: 'auto'}}/>
            </ScrollAnimation>
        </Grid>
    )
}

export {ProjectImage}
