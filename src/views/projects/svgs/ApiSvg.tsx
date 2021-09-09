import React, {CSSProperties} from "react";
import {Tooltip} from "@material-ui/core";


function ApiSvg() {
    const svgStyles = {
        width: '35px',
        height: '35px',
        display: 'inline-block',
        position: 'relative',
        top: '10px',
        left: '-2px'
    } as CSSProperties
    const apiSvg = 'https://image.flaticon.com/icons/png/512/603/603197.png';

    return (
        <>
            <Tooltip title="API" placement={'top'}>
                <img style={svgStyles}
                     src={apiSvg}
                     alt="not available"/>
            </Tooltip>
        </>
    )
}

export {ApiSvg}
