import React from "react";
import {Typography} from "@material-ui/core";

interface Props {
    title: string
}

function AboutMeSectionTitle(props: Props) {
    return (
        <>
            <Typography
                variant={"h3"}
                className={'mt-2'}
                style={{fontWeight: 'bold'}}>
                {props.title}
            </Typography>
        </>
    )
}

export {AboutMeSectionTitle}
