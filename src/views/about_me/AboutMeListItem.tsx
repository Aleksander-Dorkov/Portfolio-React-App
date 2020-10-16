import React, {CSSProperties} from "react";
import {Typography} from "@material-ui/core";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ScrollAnimation from "react-animate-on-scroll";
import CodeIcon from '@material-ui/icons/Code';

interface Props {
    value: string,
    codeSvg: boolean
}

function AboutMeListItem(props: Props) {
    const styles = {
        position: 'relative',
        top: '5px',
        right: '3px'
    } as CSSProperties;

    return (
        <ScrollAnimation animateIn="animate__backInLeft">
            <li>
                {props.codeSvg ? <CodeIcon style={styles}/> : <CheckBoxIcon style={styles}/>}
                <Typography variant={'subtitle1'} style={{display: 'inline-block'}}>
                    {props.value}
                </Typography>
            </li>
        </ScrollAnimation>
    )
}

export {AboutMeListItem}
