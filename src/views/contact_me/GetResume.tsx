import React, {CSSProperties, useEffect, useState} from "react";
import ScrollAnimation from "react-animate-on-scroll";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


function GetResume() {
    const svgStyles = {
        position: 'relative',
        top: '5px',
        right: '3px'
    } as CSSProperties;
    return (
        <>
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce={true}>
                <li>
                    <FeaturedPlayListIcon style={svgStyles}/>
                    <Typography variant={'h6'}
                                style={{display: 'inline-block'}}>
                        Resume&nbsp;:&nbsp;
                    </Typography>
                    <Link to={'/resume'}>
                        <Typography variant={'h6'}
                                    color={'textPrimary'}
                                    style={{display: 'inline-block'}}>
                            Click to read my resume online
                        </Typography>
                    </Link>
                </li>
            </ScrollAnimation>
        </>
    )
}

export {GetResume}
