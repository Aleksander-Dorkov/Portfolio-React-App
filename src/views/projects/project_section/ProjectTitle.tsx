import React, {CSSProperties, ReactNode, MouseEvent} from "react";
import {IconButton, Typography} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from '@material-ui/icons/Launch';
import ScrollAnimation from "react-animate-on-scroll";
import './Project.css'

interface Props {
    name: string,
    githubBackEnd?: string,
    githubFrontEnd?: string,
    deployedUrl: string
}

function ProjectTitle(props: Props) {
    const styles = {
        fontWeight: 'bold',
        marginLeft: '10px',
    } as CSSProperties

    function handleRedirect() {
        window.open(props.deployedUrl, '_blank');
    }

    return (
        <>
            <ScrollAnimation animateIn={'animate__bounce'} className={'mt-5'}>
                <Typography variant={'h3'}
                            className={'link-text'}
                            color={'textPrimary'}
                            onClick={() => handleRedirect()}
                            style={styles}>
                    {props.name}
                </Typography>
            </ScrollAnimation>
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
    const iconButtonStyles = {marginBottom: '8px', marginLeft: '1px'} as CSSProperties;

    function handleRedirect(e: MouseEvent<HTMLButtonElement>) {
        window.open(e.currentTarget.id, '_blank');
    }

    return (
        <>
            <ScrollAnimation animateIn={'animate__rollIn'} style={styles}>
                <IconButton color="inherit" aria-label="upload picture"
                            style={iconButtonStyles}
                            id={props.url}
                            onClick={(e: MouseEvent<HTMLButtonElement>) => handleRedirect(e)}>
                    {props.svgIcon}
                </IconButton>
            </ScrollAnimation>
            <ScrollAnimation animateIn={'animate__fadeIn'} style={styles}>
                <Typography variant={'h6'} style={styles}>
                    {props.text}
                </Typography>
            </ScrollAnimation>
        </>
    )
}

export {ProjectTitle}
