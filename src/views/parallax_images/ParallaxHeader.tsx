import React, {CSSProperties} from "react";
import {Grid, Paper} from "@material-ui/core";
import {Parallax} from "react-parallax";

function ParallaxHeader() {

    const insideStyles = {
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    } as CSSProperties;

    const image1 =
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80";
    return (
        <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '10px'}}>
            <Parallax bgImage={image1}
                      strength={700}
                      style={{width: '100%'}}>
                <div style={{height: 1100}}>
                    <Paper style={insideStyles}>HTML inside the parallax</Paper>
                </div>
            </Parallax>
        </Grid>

    )
}

export {ParallaxHeader}
