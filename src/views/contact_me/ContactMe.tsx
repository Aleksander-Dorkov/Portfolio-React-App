import React from "react";
import {Card, CardContent, Grid} from "@material-ui/core";
import {ContactSectionTitle} from "./ContactSectionTitle";
import {ContactMeListItem} from "./ContactMeListItem";
import {ContactMeForm} from "./ContactMeForm";


function ContactMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <CardContent>
                    <ContactSectionTitle title={'Contact me'}
                                         subtitle={'My contact information is listed below'}/>
                    <ul style={{listStyleType: 'none', paddingLeft: '20px'}}>
                        <ContactMeListItem title={'Phone Number'}
                                           description={'0878375167'}
                                           phoneSvg={true}/>
                        <ContactMeListItem title={'Email Address'}
                                           description={'aleksander.dorkov@gmail.com'}
                                           link={'mailto: aleksander.dorkov@gmail.com'}
                                           mailSvg={true}/>
                    </ul>
                    <ContactSectionTitle title={'Feedback'}
                                         subtitle={'Please feel free to send me feedback how I can improve my Resume, Portfolio etc...'}/>
                    <ContactMeForm/>
                </CardContent>
            </Card>
        </Grid>
    )
}

export {ContactMe}
