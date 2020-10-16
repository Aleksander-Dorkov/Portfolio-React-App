import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ReduxState} from "./configuration/redux/ReduxStore";
import {createMuiTheme, Grid, Paper, Theme, ThemeProvider} from "@material-ui/core";
import {ThemeBuilder} from "./views/theme/ThemeBuilder";
import {Footer} from "./views/footer/Footer";
import {BackEnd} from "./views/skills/sections/BackEnd";
import {FrontEnd} from "./views/skills/sections/FrontEnd";
import {Databases} from "./views/skills/sections/Databases";
import {TopNav} from "./views/header/TopNav";
import {ParallaxHeader} from "./views/parallax_images/ParallaxHeader";
import {DARK_MUI_THEME, LIGHT_MUI_THEME} from "./views/theme/variables";
import {SectionTitle} from "./views/section_title/SectionTitle";
import {MovieDB} from "./views/projects/MovieDB";
import {BugTracker} from "./views/projects/BugTracker";
import {CornerDiv} from "./views/courner_div/CornerDiv";
import {AboutMe} from "./views/about_me/AboutMe";
import {ParallaxFooter} from "./views/parallax_images/ParallaxFooter";
import {ContactMe} from "./views/contact_me/ContactMe";


function App() {
    const darkTheme = useSelector((state: ReduxState) => state.darkTheme);
    const [currentTheme, setCurrentTheme] = useState<Theme>();

    const defaultTHeme = createMuiTheme(DARK_MUI_THEME);
    useEffect(() => {
        if (darkTheme) {
            setCurrentTheme(createMuiTheme(DARK_MUI_THEME));
        } else {
            setCurrentTheme(createMuiTheme(LIGHT_MUI_THEME));
        }

    }, [darkTheme])

    useEffect(() => {
        //removes the loading screen, we have to use document.getElementById, because it is outside of ReactDOM
        const loadingScreenHtml = document.getElementById('loading screen');
        const loadingScreenCss = document.getElementById('loading screen css');
        if (loadingScreenHtml !== null && loadingScreenCss !== null) {
            loadingScreenHtml.style.display = 'none'
            loadingScreenCss.remove();
        }
    }, []);

    return (
        <>
            <ThemeProvider theme={(currentTheme === undefined) ? defaultTHeme : currentTheme}>
                <ThemeBuilder/>
                <CornerDiv/>
                <Paper>
                    <Grid container spacing={0}>
                        <Grid item xs={12} id={'header'}>
                            <TopNav/>
                        </Grid>
                    </Grid>
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
                    <SectionTitle name={'Contact Me'} id={'contactMe'}/>
                    <Grid container={true} justify={'center'}>
                        <ContactMe/>
                    </Grid>
                    {/*footer*/}
                    <Grid container spacing={0}>
                        <Grid item={true} xs={12}>
                            <Footer/>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default App;
