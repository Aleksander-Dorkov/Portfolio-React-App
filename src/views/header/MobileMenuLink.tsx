import React, {ReactNode} from "react";
import {MenuItem, Typography} from "@material-ui/core";
import {HashLink} from "react-router-hash-link";

interface Props {
    svg: ReactNode
    handleClose: Function,
    linkPath: string,
    linkName: string,
}

function MobileMenuLink(props: Props) {
    return (
        <>
            <MenuItem onClick={() => props.handleClose()}
                      component={HashLink}
                      to={props.linkPath}>
                <Typography variant={'h6'}
                            className={'ml-1'}>
                    {props.svg} {props.linkName}
                </Typography>
            </MenuItem>
        </>
    )
}

export {MobileMenuLink}
