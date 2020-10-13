import React, {CSSProperties} from "react";
import {Tooltip} from "@material-ui/core";


function MavenSvg() {
    const svgStyles = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        position: 'relative',
        top: '10px',
    } as CSSProperties
    const mavenSvg = 'https://raw.githubusercontent.com/vscode-icons/vscode-icons/7dee48469efc251a6426e81c788482e2734f7b7d/icons/file_type_maven.svg';
    return (
        <>
            <Tooltip title="Maven Dependency" placement={'top'}>
                <img style={svgStyles}
                     src={mavenSvg}
                     alt="not available"/>
            </Tooltip>
        </>
    )
}

export {MavenSvg}
