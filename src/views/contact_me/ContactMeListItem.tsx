import React, {CSSProperties} from "react";
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import {Typography} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

interface Props {
    title: string
    description: string
    link?: string
    mailSvg?: boolean
    phoneSvg?: boolean
    githubSvg?: boolean
}

function ContactMeListItem(props: Props) {
    const svgStyles = {
        position: 'relative',
        top: '5px',
        right: '3px'
    } as CSSProperties;

    return (
        <>
            <ScrollAnimation animateIn="animate__backInLeft">
                <li>
                    {props.mailSvg && <EmailIcon style={svgStyles}/>}
                    {props.phoneSvg && <PhoneAndroidIcon style={svgStyles}/>}
                    <Typography variant={'h6'}
                                style={{display: 'inline-block'}}>
                        {props.title}&nbsp;:&nbsp;
                    </Typography>
                    {(props.link === undefined) ?
                        <Typography variant={'h6'}
                                    style={{display: 'inline-block'}}>
                            {props.description}
                        </Typography>
                        :
                        <a href={props.link}>
                            <Typography variant={'h6'}
                                        color={'textPrimary'}
                                        style={{display: 'inline-block'}}>
                                {props.description}
                            </Typography>
                        </a>}
                </li>
            </ScrollAnimation>
        </>
    )
}

export {ContactMeListItem}
