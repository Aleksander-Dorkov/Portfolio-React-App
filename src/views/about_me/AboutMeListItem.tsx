import React from "react";
import {Typography} from "@material-ui/core";
import CheckBoxIcon from '@material-ui/icons/CheckBox';

interface Props {
    value: string
}

function AboutMeListItem(props: Props) {
    return (
        <li>
            <CheckBoxIcon style={{position: 'relative', top: '5px', right: '3px'}}/>
            <Typography variant={'subtitle1'} style={{display: 'inline-block'}}>
                {props.value}
            </Typography>
        </li>
    )
}

export {AboutMeListItem}
