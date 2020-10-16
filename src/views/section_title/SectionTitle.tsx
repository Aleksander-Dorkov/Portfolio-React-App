import React from "react";
import {Grid, Typography} from "@material-ui/core";

interface Props {
    name: string
    id: string
}

function SectionTitle(props: Props) {
    return (
        <>
            <span id={props.id} className={'mb-1'} style={{color: 'rgba(255, 0, 0, 0.0)'}}>s</span>
            <Grid item={true} xs={12}>
                <Typography variant={'h2'}
                            align={'center'}
                            style={{fontWeight: 'bold'}}
                            className={'mt-5'}>
                    {props.name}
                </Typography>
            </Grid>
        </>
    )
}

export {SectionTitle}
