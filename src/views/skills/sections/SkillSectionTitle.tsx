import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {Grid, Typography} from "@material-ui/core";

interface Props {
    value: string
}

function SkillSectionTitle(props: Props) {
    //in case I want to use a name that contains a /
    function handleTitle(val: string) {
        if (!val.includes("/")) {
            return val;
        }
        const strings = val.split("/");
        return `${strings[0]} / ${strings[1]}`;
    }

    return (
        <>
            <Grid item={true} xs={12}>
                <ScrollAnimation animateIn="animate__backInDown"
                                 className={'mb-1 mt-3'}>
                    <Typography variant={'h3'}
                                align={'center'}
                                style={{fontWeight: 'bold'}}>
                        {handleTitle(props.value)}
                    </Typography>
                </ScrollAnimation>
            </Grid>
        </>
    )
}

export {SkillSectionTitle}
