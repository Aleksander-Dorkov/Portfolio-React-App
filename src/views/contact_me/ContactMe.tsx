import React from "react";
import {Card, CardContent, Grid} from "@material-ui/core";
import {ContactSectionTitle} from "./ContactSectionTitle";
import {ContactMeListItem} from "./ContactMeListItem";
import {ContactMeForm} from "./ContactMeForm";
import {GetResume} from "./GetResume";


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
                                           description={'Click to send me an email'}
                                           link={'mailto: aleksander.dorkov@gmail.com'}
                                           mailSvg={true}/>
                        <GetResume/>

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
