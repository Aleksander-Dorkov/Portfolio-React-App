import React from "react";
import {Grid, Typography} from "@material-ui/core";

interface Props {
    name: string
    id: string
}

function SectionTitle(props: Props) {
    return (
        <Grid item={true} xs={12}>
            <Typography variant={'h2'}
                        id={props.id}
                        align={'center'}
                        style={{fontWeight: 'bold'}}
                        className={'mt-5'}>{props.name}
            </Typography>
        </Grid>
    )
}

export {SectionTitle}
