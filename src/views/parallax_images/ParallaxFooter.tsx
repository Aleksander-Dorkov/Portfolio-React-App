import React from "react";
import {Grid} from "@material-ui/core";
import {Parallax} from "react-parallax";
import './ParallaxHeader.css'

function ParallaxFooter() {
    const image1 = "https://i2.wp.com/bicyclenl.com/wp-content/uploads/2015/12/parallax-dark.jpg";
    return (
        <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '10px'}}>
            <Parallax bgImage={image1}
                      strength={1200}
                      style={{width: '100%'}}>
                <div style={{height: 500}}>
                </div>
            </Parallax>
        </Grid>
    )
}

export {ParallaxFooter}
