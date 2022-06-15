import React, {CSSProperties} from "react";
import {Grid, Typography} from "@material-ui/core";
import {Parallax} from "react-parallax";
import GetAppIcon from '@material-ui/icons/GetApp';
import './ParallaxHeader.css'
import GitHubIcon from '@material-ui/icons/GitHub';
// @ts-ignore
import PDF from '../resume/Aleksandar-Dorkov-Resume.pdf';

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
                        <Typography variant={'h1'} style={{display: 'inline'}} className={'ml-3'}>Aleksandar</Typography>
                        <Typography variant={'h1'} style={{display: 'inline', color: '#00affb'}}> Dorkov</Typography>
                        <Typography variant={'h3'} className={'ml-3'}>Software Engineer</Typography>


                        <a href="https://github.com/Aleksander-D-92"
                           target={'_blank'}
                           rel="noopener noreferrer"
                           className={'parallax-link ml-3'}>
                            <GitHubIcon fontSize={'large'} className={'parallax-svg'}/>
                            <Typography variant={'h5'} style={{display: 'inline'}}>Github</Typography>
                        </a>

                        <a href={PDF}
                           rel="noopener noreferrer"
                           target="_blank"
                           className={'parallax-link ml-3'}>
                            <GetAppIcon fontSize={'large'} className={'parallax-svg'}/>
                            <Typography variant={'h5'} style={{display: 'inline'}}>Resume</Typography>
                        </a>

                    </div>
                </div>
            </Parallax>
        </Grid>

    )
}

export {ParallaxHeader}
