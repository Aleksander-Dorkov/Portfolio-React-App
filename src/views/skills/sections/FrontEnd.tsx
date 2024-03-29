import React from "react";
import { Skill } from "../skill/Skill";
import { SkillSectionTitle } from "./SkillSectionTitle";
import { Grid } from "@material-ui/core";


function FrontEnd() {
    return (
        <>
            <Grid container={true} justify={'center'} alignItems={'flex-start'}>
                <SkillSectionTitle value={'Front End'} />
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg'}
                    tooltip={'HTML'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://www.iconninja.com/files/64/358/407/css3-icon.svg'}
                    tooltip={'CSS'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg'}
                    tooltip={'JavaScript'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'}
                    tooltip={'TypeScript'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/angular/angular-icon.svg'}
                    tooltip={'Angular'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg'}
                    tooltip={'Bootstrap'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://clarity.design/assets/images/clarity-logo.svg'}
                    tooltip={'Clarity Design'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg'}
                    tooltip={'Apollo Client'}
                    animation={'animate__backInRight'} />
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg'}
                    tooltip={'jQuery'}
                    animation={'animate__backInRight'} />
            </Grid>
        </>
    )
}

export { FrontEnd }
