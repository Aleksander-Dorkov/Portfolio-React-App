import React from "react";
import {Card, Grid} from "@material-ui/core";


function AboutMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                About me
            </Card>
        </Grid>
    )
}

export {AboutMe}
