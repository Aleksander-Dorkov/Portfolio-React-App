import React, {ReactNode} from "react";
import {MavenSvg} from "../svgs/MavenSvg";
import {Typography} from "@material-ui/core";
import {codeTextStyles} from "./ListItem";

interface Props {
    svg: ReactNode
    href: string,
    value: string,
}

function ListItemLink(props: Props) {
    return (
        <>
            <li>
                <MavenSvg/>
                <a href={props.href}
                   target={'_blank'}
                   rel="noopener noreferrer">
                    <Typography style={codeTextStyles}>
                        {props.value}
                    </Typography>
                </a>
            </li>
        </>
    )
}

export {ListItemLink}
