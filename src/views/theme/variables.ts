import {Theme} from "@material-ui/core";

const LIGHT_MUI_THEME = {
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

const DARK_MUI_THEME = {
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

export {DARK_MUI_THEME, LIGHT_MUI_THEME}
