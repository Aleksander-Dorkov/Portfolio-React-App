import React from "react";
import {Skill} from "../skill/Skill";
import {SkillSectionTitle} from "./SkillSectionTitle";

function Databases() {
    return (
        <>
            <SkillSectionTitle value={'Databases'}/>
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
