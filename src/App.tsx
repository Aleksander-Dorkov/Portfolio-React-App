import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ReduxState} from "./configuration/redux/ReduxStore";
import {createMuiTheme, Paper, Theme, ThemeProvider, Typography} from "@material-ui/core";
import {ThemeBuilder} from "./views/theme/ThemeBuilder";
import {Footer} from "./views/footer/Footer";

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
        <ThemeProvider theme={(currentTheme === undefined) ? defaultTHeme : currentTheme}>
            <ThemeBuilder/>
            <Paper>
                <Typography variant={'h1'}>
                    test theme
                </Typography>
                <Footer/>
            </Paper>
        </ThemeProvider>
    );
}

export default App;
