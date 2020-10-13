import React, {CSSProperties, ReactNode} from "react";
import {Typography} from "@material-ui/core";
import {codeTextStyles} from "./ListItemCode";
import ScrollAnimation from "react-animate-on-scroll";

interface Props {
    svg: ReactNode
    href: string,
    value: string,
    description?: string
}

function ListItemLink(props: Props) {
    const styles = {display: 'inline-block', fontWeight: 'bold'} as CSSProperties
    return (
        <>
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true}>
                <li>
                    {props.svg}
                    <a href={props.href}
                       target={'_blank'}
                       rel="noopener noreferrer">
                        <Typography style={codeTextStyles}>
                            {props.value}
                        </Typography>
                    </a>
                    <Typography style={styles} variant={'subtitle1'} color={'textSecondary'}>
                        {props.description}
                    </Typography>
                </li>
            </ScrollAnimation>
        </>
    )
}

export {ListItemLink}
