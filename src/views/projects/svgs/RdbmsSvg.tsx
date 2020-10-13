import React, {CSSProperties} from "react";
import {Tooltip} from "@material-ui/core";

function RdbmsSvg() {
    const svgStyles = {
        width: '33px',
        height: '30px',
        display: 'inline-block',
        position: 'relative',
        top: '10px',
        right:'5px'
    } as CSSProperties

    const npmSvg = 'https://i.ibb.co/hKyRJvf/icons8-add-database-80.png';
    return (
        <>
            <Tooltip title="RDBMS" placement={'top'}>
                <img style={svgStyles}
                     src={npmSvg}
                     alt="not available"/>
            </Tooltip>
        </>
    )
}

export {RdbmsSvg}
