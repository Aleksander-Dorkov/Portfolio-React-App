import React from "react";
import {Grid} from "@material-ui/core";
import {Parallax} from "react-parallax";
import './ParallaxHeader.css'

function ParallaxFooter() {
    const image1 = "https://i.ibb.co/g9CTYrm/background.jpg";
    return (
        <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '10px'}}>
            <Parallax bgImage={image1}
                      strength={800}
                      style={{width: '100%'}}>
                <div style={{height: 600}}>
                </div>
            </Parallax>
        </Grid>
    )
}

export {ParallaxFooter}
