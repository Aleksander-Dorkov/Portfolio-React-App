import React from "react";
import {Grid} from "@material-ui/core";
import {ParallaxHeader} from "./parallax_images/ParallaxHeader";
import {SectionTitle} from "./section_title/SectionTitle";
import {BackEnd} from "./skills/sections/BackEnd";
import {FrontEnd} from "./skills/sections/FrontEnd";
import {Databases} from "./skills/sections/Databases";
import {MovieDB} from "./projects/MovieDB";
import {BugTracker} from "./projects/BugTracker";
import {ParallaxFooter} from "./parallax_images/ParallaxFooter";
import {AboutMe} from "./about_me/AboutMe";
import {ContactMe} from "./contact_me/ContactMe";
import {Footer} from "./footer/Footer";
import {CornerDiv} from "./courner_div/CornerDiv";


function LandingPage() {
    return (
        <>
            <CornerDiv/>
            <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '50px'}}>
                <ParallaxHeader/>
            </Grid>

            {/*front end and back end skills*/}
            <SectionTitle name={'Skills'} id={'skillSection'}/>
            <Grid container={true} justify={'center'} alignItems={'center'}>
                <Grid item xs={6}>
                    <BackEnd/>
                </Grid>
                <Grid item xs={6}>
                    <FrontEnd/>
                </Grid>
            </Grid>

            {/*databases*/}
            <Grid container={true} justify={'center'}>
                <Databases/>
            </Grid>
            {/*projects*/}
            <SectionTitle name={'Projects'} id={'projectSection'}/>
            <Grid container={true} justify={'center'}>
                <MovieDB/>
                <BugTracker/>
            </Grid>
            {/*footer parallax*/}
            <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '50px'}}>
                <ParallaxFooter/>
            </Grid>
            {/*about me*/}
            <SectionTitle name={'About Me'} id={'aboutMeSection'}/>
            <Grid container={true} justify={'center'}>
                <AboutMe/>
            </Grid>
            {/*contact me*/}
            <SectionTitle name={'Contacts and Feedback'} id={'contactMe'}/>
            <Grid container={true} justify={'center'}>
                <ContactMe/>
            </Grid>
            {/*footer*/}
            <Grid container spacing={0}>
                <Grid item={true} xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </>
    )
}

export {LandingPage}
