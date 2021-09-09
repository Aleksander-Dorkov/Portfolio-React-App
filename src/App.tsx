import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ReduxState} from "./configuration/redux/ReduxStore";
import {createMuiTheme, Paper, Theme, ThemeProvider} from "@material-ui/core";
import {ThemeButton} from "./views/theme/ThemeButton";
import {TopNav} from "./views/header/TopNav";
import {DARK_MUI_THEME, LIGHT_MUI_THEME} from "./views/theme/variables";
import {WebAppRoutes} from "./configuration/router/WebAppRoutes";


function App() {
    const darkTheme = useSelector((state: ReduxState) => state.darkTheme);
    const defaultTHeme = createMuiTheme(DARK_MUI_THEME);
    const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTHeme);
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
                <ThemeButton/>
                <Paper>
                    <TopNav/>
                    <WebAppRoutes/>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default App;
