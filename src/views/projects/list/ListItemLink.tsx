import React, {ReactNode} from "react";
import {MavenSvg} from "../svgs/MavenSvg";
import {Typography} from "@material-ui/core";
import {codeTextStyles} from "./ListItemCode";

interface Props {
    svg: ReactNode
    href: string,
    value: string,
    description?: string
}

function ListItemLink(props: Props) {
    return (
        <>
            <li>
                {props.svg}
                <a href={props.href}
                   target={'_blank'}
                   rel="noopener noreferrer">
                    <Typography style={codeTextStyles}>
                        {props.value}
                    </Typography>
                </a> {props.description}
            </li>
        </>
    )
}

export {ListItemLink}
