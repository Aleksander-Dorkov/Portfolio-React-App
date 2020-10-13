import React, {CSSProperties, ReactNode} from "react";
import {Typography} from "@material-ui/core";

interface Props {
    value: string,
    description?: string | ReactNode
}

function ProjectSubTitle(props: Props) {
    const styles = {fontWeight: 'bold', marginTop: '10px'} as CSSProperties
    return (
        <>
            <Typography variant={'h5'} style={styles}>
                {props.value}
            </Typography>
            <Typography variant={'subtitle1'} color={'textSecondary'} style={{fontWeight: 'bold'}}>
                {props.description}
            </Typography>
        </>
    )
}

export {ProjectSubTitle}
