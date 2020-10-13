import React, {CSSProperties, useEffect, useState} from "react";
import './CornerDiv.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import {useSelector} from 'react-redux';
import {ReduxState} from "../../configuration/redux/ReduxStore";
import {Typography} from "@material-ui/core";


function CornerDiv() {
    const state = useSelector((state: ReduxState) => state);
    const [color, setColor] = useState<string>('#7036b3');
    useEffect(() => {
        if (state.darkTheme) {
            setColor('#7036b3')
        } else {
            setColor('#dc004e')
        }
    }, [state]);

    const [visibility, setVisibility] = useState<string>('hidden');


    const btnStyles = {
        marginTop: '10px',
        marginLeft: '40px',
        marginBottom: '20px',
        transform: 'scale(2.5)'
    } as CSSProperties
    // @ts-ignore
    const tooltipStyles = {
        visibility: visibility,
        position: 'fixed',
        top: '4%',
        right: '5.5%',
        zIndex: '5000',
        color: 'white',
        fontSize: '0.9rem',
        backgroundColor: 'rgba(112,112,112,0.95)',
        padding: '5px',
        borderRadius: '6px'
    } as CSSProperties;

    function hide() {
        setVisibility('hidden');
    }

    function show() {
        setVisibility('visible')
    }

    return (
        <>

            <Typography style={tooltipStyles} variant={'subtitle1'}>
                Portfolio Code
            </Typography>
            <div id="corner-triangle" style={{borderColor: `transparent ${color} transparent transparent`}}>
                <div className="corner-triangle-text">
                    <a href="https://github.com/Aleksander-D-92/Portfolio-React-App"
                       rel="noopener noreferrer"
                       target="_blank">
                        <GitHubIcon style={btnStyles} onMouseEnter={show} onMouseLeave={hide}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export {CornerDiv}
