import React from "react";
import {Tooltip, Typography} from "@material-ui/core";
import './Skill.css'
import ScrollAnimation from "react-animate-on-scroll";

interface Props {
    svgUrl: string,
    tooltip: string,
    animation: string
}

//fadeInLeft
function Skill(props: Props) {
    return (
        <>
            <ScrollAnimation animateIn={props.animation}
                             style={{display: 'inline-block'}}>
                <Tooltip title={props.tooltip} placement={'top'}>
                    <img src={props.svgUrl}
                         className={'skill-image mr-3 ml-3'}
                         alt={'not available'}
                         width={150}
                         height={150}/>
                </Tooltip>
                <Typography variant="body1"
                            align={'center'}
                            style={{fontSize: '1.4rem', fontWeight: 'bold'}}
                            className={'mt-2 mb-2'}>
                    {props.tooltip}
                </Typography>
            </ScrollAnimation>
        </>
    )
}

export {Skill}
