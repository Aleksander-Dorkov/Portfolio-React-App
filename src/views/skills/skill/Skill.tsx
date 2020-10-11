import React from "react";
import {Card, Grid, Typography} from "@material-ui/core";
import './Skill.css'
import ScrollAnimation from "react-animate-on-scroll";

interface Props {
    svgUrl: string,
    tooltip: string,
    animation: string
}

function Skill(props: Props) {
    return (
        <>
            <ScrollAnimation animateIn={props.animation}
                             style={{display: 'inline-block'}} className={'skill-image'}>
                <Card elevation={10}
                      className={'m-2'}
                      style={{minWidth: '200px'}}>
                    <Grid container={true} justify={'center'} alignItems={'center'}>
                        <img src={props.svgUrl}
                             className={'mt-2'}
                             alt={'not available'}
                             width={150}
                             height={150}/>
                    </Grid>
                    <Typography variant="body1"
                                align={'center'}
                                style={{fontSize: '1.4rem', fontWeight: 'bold'}}
                                className={'mt-2 mb-2'}>
                        {props.tooltip}
                    </Typography>
                </Card>
            </ScrollAnimation>
        </>
    )
}

export {Skill}
