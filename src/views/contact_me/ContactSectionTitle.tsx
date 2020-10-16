import React from "react";
import {Typography} from "@material-ui/core";

interface Props {
    title: string,
    subtitle: string
}

function ContactSectionTitle(props: Props) {
    return (
        <>
            <Typography variant={'h3'} style={{fontWeight: 'bold'}}>
                {props.title}
            </Typography>
            <Typography variant={'subtitle1'}
                        color={'textSecondary'}
                        style={{fontWeight: 'bold'}}>
                {props.subtitle}
            </Typography>
        </>
    )
}

export {ContactSectionTitle}
