import React, {CSSProperties} from "react";
import {Tooltip} from "@material-ui/core";


function NpmSvg() {
    const svgStyles = {
        width: '25px',
        height: '25px',
        display: 'inline-block',
        position: 'relative',
        top: '7px',
        marginRight: '6px'
    } as CSSProperties
    const npmSvg = 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg';
    return (
        <>
            <Tooltip title="NPM Dependency" placement={'top'}>
                <img style={svgStyles}
                     src={npmSvg}
                     alt="not available"/>
            </Tooltip>
        </>
    )
}

export {NpmSvg}
