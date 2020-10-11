import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ReduxState} from "./configuration/redux/ReduxStore";
import {createMuiTheme, Grid, Paper, Theme, ThemeProvider, Typography} from "@material-ui/core";
import {ThemeBuilder} from "./views/theme/ThemeBuilder";
import {Footer} from "./views/footer/Footer";
import {BackEnd} from "./views/skills/sections/BackEnd";
import {FrontEnd} from "./views/skills/sections/FrontEnd";
import {Databases} from "./views/skills/sections/Databases";
import {Header} from "./views/header/Header";
import {ParallaxHeader} from "./views/parallax_images/ParallaxHeader";


function App() {
    const darkTheme = useSelector((state: ReduxState) => state.darkTheme);
    const [currentTheme, setCurrentTheme] = useState<Theme>();

    const defaultTHeme = createMuiTheme({
        palette: {
            type: "light",
            // primary: purple
        },
        overrides: {
            MuiTooltip: {
                tooltip: {
                    fontSize: "0.9em",
                }
            }
        }
    });
    useEffect(() => {
        if (darkTheme) {
            setCurrentTheme(createMuiTheme({
                palette: {
                    type: "dark",
                    primary: {
                        main: '#90caf9'
                    },
                    secondary: {main: '#00e676'}
                    // primary: purple
                },
                overrides: {
                    MuiTooltip: {
                        tooltip: {
                            fontSize: "0.9em",
                        }
                    }
                }
            }));
        } else {
            setCurrentTheme(createMuiTheme({
                palette: {
                    type: "light",
                    // primary: purple
                },
                overrides: {
                    MuiTooltip: {
                        tooltip: {
                            fontSize: "0.9em",
                        }
                    }
                }
            }));
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
                <Paper>
                    <Grid container spacing={0}>
                        <Grid item xs={12} id={'header'}>
                            <Header/>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '50px'}}>
                        <ParallaxHeader/>
                    </Grid>
                    {/*front end and back end skills*/}
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
