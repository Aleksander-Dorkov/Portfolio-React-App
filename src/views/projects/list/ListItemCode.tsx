import React, {CSSProperties, ReactNode} from "react";
import {Typography} from "@material-ui/core";

interface Props {
    svg: ReactNode
    value: string
    description?: string
}

const codeTextStyles = {
    color: '#dd7979',
    backgroundColor: '#1b1d23',
    borderRadius: '5px',
    padding: '2px 4px',
    display: 'inline-block',
} as CSSProperties

function ListItemCode(props: Props) {
    return (
        <>
            <li>
                {props.svg}
                <Typography style={codeTextStyles}>{props.value}</Typography> {props.description}
            </li>
        </>
    )
}

export {ListItemCode, codeTextStyles}
