import React, {CSSProperties, ReactNode} from "react";
import {IconButton, Typography} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from '@material-ui/icons/Launch';
import ScrollAnimation from "react-animate-on-scroll";

interface Props {
    url: string,
    name: string,
    githubBackEnd?: string,
    githubFrontEnd?: string,
    deployedUrl: string
}

function ProjectTitle(props: Props) {
    const styles = {display: 'inline-block'} as CSSProperties;
    return (
        <>
            <a href={props.url}
               style={{textDecoration: 'none'}}
               target={'_blank'}
               className={'common-link'}
               rel="noopener noreferrer">
                <Typography variant={'h3'}
                            color={'textPrimary'}
                            style={{fontWeight: 'bold'}}>
                    {props.name}
                </Typography>
            </a>
            <GetLink svgIcon={<LaunchIcon fontSize={'large'}/>}
                    url={props.deployedUrl}
                    text={'View Deployed'}/>

            {props.githubBackEnd !== undefined &&
            <GetLink svgIcon={<GitHubIcon fontSize={'large'}/>}
                    url={props.githubBackEnd}
                    text={'Back End'}/>}
                    
            {props.githubFrontEnd !== undefined &&
            <GetLink svgIcon={<GitHubIcon fontSize={'large'}/>}
                    url={props.githubFrontEnd}
                    text={'Front End'}/>}

        </>
    )
}

interface SvgProps {
    svgIcon: ReactNode,
    url: string,
    text: string
}

function GetLink(props: SvgProps) {
    const styles = {display: 'inline-block'} as CSSProperties;
    return (
        <>
            <ScrollAnimation animateIn={'animate__rollIn'} style={{display: 'inline-block'}}>
                <IconButton color="inherit" aria-label="upload picture" className={'ml-1'}>
                    <a href={props.url} target={'_blank'} rel="noopener noreferrer"
                       className={'parallax-link'}>{props.svgIcon}
                    </a>
                </IconButton>
            </ScrollAnimation>
            <ScrollAnimation animateIn={'animate__fadeIn'} style={styles}>
                <Typography variant={'h6'} style={styles}>
                    Front End
                </Typography>
            </ScrollAnimation>
        </>
    )
}

export {ProjectTitle}
