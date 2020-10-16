import React from "react";
import {Card, Grid, Typography} from "@material-ui/core";


function ContactMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <Typography variant={'h3'} style={{fontWeight: 'bold'}}>
                    Contact me
                </Typography>
                <Typography variant={'subtitle1'}
                            color={'textSecondary'}
                            style={{fontWeight: 'bold'}}>
                    Please feel free to send me feedback how i can improve my CV, Portfolio etc...
                </Typography>
            </Card>
        </Grid>
    )
}

export {ContactMe}
