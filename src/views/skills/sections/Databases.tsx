import React from "react";
import {Skill} from "../skill/Skill";
import {SectionTitle} from "./SectionTitle";

function Databases() {
    return (
        <>
            <SectionTitle value={'Databases'}/>
            <span id={'databaseSkills'}></span>
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
