import React, {useEffect, useState} from "react";
import {Skill} from "./Skill";
import {Grid, Typography} from "@material-ui/core";
import {SectionTitle} from "./SectionTitle";

interface Props {

}

function Databases(props: Props) {
    return (
        <>
            <SectionTitle value={'Databases'}/>
            <Skill
                svgUrl={'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'}
                tooltip={'PostgreSQL'}
                animation={'animate__backInUp'}/>
            <Skill
                svgUrl={'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg'}
                tooltip={'MySQL'}
                animation={'animate__backInUp'}/>
        </>
    )
}

export {Databases}
