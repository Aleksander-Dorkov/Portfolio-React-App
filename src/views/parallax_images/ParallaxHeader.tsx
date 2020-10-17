import React, {CSSProperties} from "react";
import {Grid, IconButton, Typography} from "@material-ui/core";
import {Parallax} from "react-parallax";
import GetAppIcon from '@material-ui/icons/GetApp';
import './ParallaxHeader.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from "react-router-dom";

function ParallaxHeader() {
    const nameStyles = {
        color: 'white',
        padding: 20,
        position: "absolute",
        top: "45%",
        left: "380px",
        transform: "translate(-50%,-50%)"
    } as CSSProperties;

    const image1 =
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80";
    return (
        <Grid container={true} spacing={0} justify={'center'} style={{marginTop: '10px'}}>
            <Parallax bgImage={image1}
                      strength={1000}
                      style={{width: '100%'}}>
                <div style={{height: 900}}>
                    <div style={nameStyles}>
                        <Typography variant={'h1'} style={{display: 'inline'}} className={'ml-3'}>Alexander</Typography>
                        <Typography variant={'h1'} style={{display: 'inline', color: '#00affb'}}> Dorkov</Typography>
                        <Typography variant={'h3'} className={'ml-3'}>Software Engineer</Typography>

                        <IconButton color="inherit" aria-label="upload picture" component="span">
                            <Link to={'/resume'}>Get My resume</Link>
                            <a href="https://github.com/Aleksander-D-92" target={'_blank'} rel="noopener noreferrer"
                               className={'parallax-link'}><GitHubIcon fontSize={'large'}/>
                            </a>
                        </IconButton>
                        <Typography variant={'h5'} style={{display: 'inline'}}>Github</Typography>
                        <IconButton color="inherit" aria-label="upload picture" component="span">
                            <a href="https://www.docdroid.net/OzLGWJz/resume-pdf" target={'_blank'} rel="noopener noreferrer"
                               className={'parallax-link'}><GetAppIcon fontSize={'large'}/>
                            </a>
                               </IconButton>
                        <Typography variant={'h5'} style={{display: 'inline'}}>Resume</Typography>
                    </div>
                </div>
            </Parallax>
        </Grid>

    )
}

export {ParallaxHeader}
