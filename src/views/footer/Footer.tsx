import React, {CSSProperties} from "react";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";

function Footer() {
    const footerTextStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    } as CSSProperties

    return (
        <>
            <AppBar position="static" color={'inherit'} elevation={20} className={'mt-3'}>
                <Toolbar>
                    <Grid container={true} justify={'center'} spacing={3}>
                        <Typography variant={'subtitle1'} style={footerTextStyle} color={'textPrimary'}>Portfolio Website an </Typography>
                        <Typography variant={'subtitle1'} align={'center'} style={footerTextStyle}
                                    className={'ml-1 mr-1'}>
                            <a href="https://github.com/Aleksander-D-92"
                               target={'_blank'}
                               rel="noopener noreferrer"
                               style={{color: '#d93a3d', textDecoration: 'none'}}>Alexander D.</a>
                        </Typography>
                        <Typography variant={'subtitle1'} style={footerTextStyle}>Production</Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export {Footer}
