import React, {CSSProperties, ReactNode} from "react";
import {Typography} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

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
    const descriptionStyles = {display: 'inline-block', fontWeight: 'bold'} as CSSProperties
    return (
        <>
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true}>
                <li>
                    {props.svg}
                    <Typography style={codeTextStyles}>
                        {props.value}
                    </Typography>
                    <Typography style={descriptionStyles} variant={'subtitle1'} color={'textSecondary'}>
                        {props.description}
                    </Typography>
                </li>
            </ScrollAnimation>
        </>
    )
}

export {ListItemCode, codeTextStyles}
