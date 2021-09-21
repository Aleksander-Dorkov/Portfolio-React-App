import {createMuiTheme, Theme} from "@material-ui/core";

const LIGHT_MUI_THEME_PROPS = {
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
} as Theme;

const DARK_MUI_THEME_PROPS = {
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
} as Theme;
const DARK_THEME = createMuiTheme(DARK_MUI_THEME_PROPS);
const LIGHT_THEME = createMuiTheme(LIGHT_MUI_THEME_PROPS);
export {DARK_MUI_THEME_PROPS, LIGHT_MUI_THEME_PROPS, DARK_THEME, LIGHT_THEME}
