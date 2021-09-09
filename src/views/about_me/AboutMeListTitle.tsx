import React from "react";
import {Typography} from "@material-ui/core";

interface Props {
    title: string,
    role?: string,
    date?: string
}

function AboutMeListTitle(props: Props) {
    return (
        <>
            <Typography variant={'h5'}
                        color={'textPrimary'}
                        style={{textDecoration: 'underline'}}>
                {props.title}
            </Typography>
            {props.role !== undefined &&
            <Typography variant={'subtitle1'}
                        color={'textSecondary'}>
                {props.role}
            </Typography>}
            {props.date !== undefined &&
            <Typography variant={'subtitle1'}
                        color={'textSecondary'}>
                {props.date}
            </Typography>}

        </>
    )
}

export {AboutMeListTitle}
