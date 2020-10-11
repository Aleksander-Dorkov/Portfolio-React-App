import React from "react";
import {Button, Typography} from "@material-ui/core";
import {HashLink} from "react-router-hash-link";

interface Props {
    svg: React.ReactNode
    linkName: string,
    linkPath: string
}

function HeaderLink(props: Props) {
    return (
        <Button color={'inherit'}
                component={HashLink}
                to={props.linkPath}
                smooth={true}>
            {props.svg}
            <Typography variant={'h6'} style={{fontWeight: 'bold'}}>
                {props.linkName}
            </Typography>
        </Button>
    )
}

export {HeaderLink}
