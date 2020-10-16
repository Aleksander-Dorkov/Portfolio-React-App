import React from "react";
import {Card, Grid} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import {DeveloperHistory} from "./DeveloperHistory";
import {PreviousJobs} from "./PreviousJobs";


function AboutMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <Grid container={true} spacing={5} xs={12}>
                    <Grid item={true} xs={3}>
                        <ScrollAnimation animateIn={'animate__zoomIn'} style={{display: 'block'}}>
                            <img src="https://i.ibb.co/PMMS8RW/pic-cropped.jpg"
                                 alt="not available"
                                 width={200}
                                 height={300}/>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item={true} xs={8}>
                        <ScrollAnimation animateIn={'animate__zoomIn'} style={{display: 'block'}}>
                            <DeveloperHistory/>
                            <PreviousJobs/>
                        </ScrollAnimation>
                    </Grid>

                </Grid>
            </Card>
        </Grid>
    )
}

export {AboutMe}
