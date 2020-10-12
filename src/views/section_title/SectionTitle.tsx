import React from "react";
import {Grid, Typography} from "@material-ui/core";

interface Props {
    name: string
}

function SectionTitle(props: Props) {
    return (
        <Grid item={true} xs={12}>
            <Typography variant={'h2'}
                        align={'center'}
                        style={{fontWeight: 'bold'}}
                        className={'mt-5'}>{props.name}
            </Typography>
        </Grid>
    )
}

export {SectionTitle}
