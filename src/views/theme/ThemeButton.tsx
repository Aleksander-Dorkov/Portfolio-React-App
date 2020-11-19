import React, {useEffect, useState} from "react";
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import './ThemeButton.css'
import {IconButton, Paper, Tooltip} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../../configuration/redux/ReduxStore";
import {DARK_THEME, setDarkTheme, setLightTheme} from "../../configuration/redux/ThemeReducer";


function ThemeButton() {
    const dispatch = useDispatch();
    const darkTheme = useSelector((state: ReduxState) => state.darkTheme);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [displayTooltip, setDisplayTooltip] = useState<boolean>(true);

    useEffect(() => {
        let item = localStorage.getItem('theme');
        if (item === DARK_THEME) {
            dispatch(setDarkTheme());
        } else {
            dispatch(setLightTheme());
        }
        setDisabled(false);
    }, [dispatch]);

    function toggleTooltip() {
        setDisplayTooltip(false);
    }

    return (
        <>
            <Tooltip title={(disabled) ? 'Only For Paid Account or Admin' : "Click to Toggle dark/light theme"}
                     open={displayTooltip}>
                <Paper className={'theme-paper'} elevation={24}>
                    <IconButton style={{padding: '5px'}} disabled={disabled} onClick={toggleTooltip}>
                        {darkTheme ?
                            <Brightness7Icon style={{fontSize: '85px'}} onClick={() => dispatch(setLightTheme())}/>
                            :
                            <Brightness4Icon style={{fontSize: '85px'}} onClick={() => dispatch(setDarkTheme())}/>
                        }
                    </IconButton>
                </Paper>
            </Tooltip>
        </>
    )
}

export {ThemeButton}
