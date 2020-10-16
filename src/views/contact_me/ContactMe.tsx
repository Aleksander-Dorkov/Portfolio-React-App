import React from "react";
import {Card, CardContent, Grid} from "@material-ui/core";
import {ContactSectionTitle} from "./ContactSectionTitle";


function ContactMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <CardContent>
                    <ContactSectionTitle title={'Contact me'}
                                         subtitle={'My contact information listed below'}/>
                    <ContactSectionTitle title={'Feedback'}
                                         subtitle={'Please feel free to send me feedback how i can improve my CV, Portfolio etc...'}/>
                </CardContent>
            </Card>
        </Grid>
    )
}

export {ContactMe}
