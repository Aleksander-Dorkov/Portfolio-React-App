import React from "react";
import {Skill} from "../skill/Skill";
import {SkillSectionTitle} from "./SkillSectionTitle";

function Databases() {
    return (
        <>
            <SkillSectionTitle value={'SQL/NoSQL'}/>
            <Skill
                svgUrl={'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'}
                tooltip={'PostgreSQL'}
                animation={'animate__backInUp'}/>
            <Skill
                svgUrl={'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg'}
                tooltip={'OracleDB'}
                animation={'animate__backInUp'}/>
            <Skill
                svgUrl={'https://www.vectorlogo.zone/logos/redis/redis-icon.svg'}
                tooltip={'Redis'}
                animation={'animate__backInUp'}/>
            <Skill
                svgUrl={'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'}
                tooltip={'MongoDB'}
                animation={'animate__backInUp'}/>
        </>
    )
}

export {Databases}
