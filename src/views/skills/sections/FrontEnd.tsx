import React from "react";
import {Skill} from "../skill/Skill";
import {SectionTitle} from "./SectionTitle";
import {Grid} from "@material-ui/core";


function FrontEnd() {
    return (
        <>
            <SectionTitle value={'Front End'}/>
            <Grid container={true} justify={'center'} alignItems={'center'}>
                <Skill
                    svgUrl={'https://cdn.worldvectorlogo.com/logos/javascript.svg'}
                    tooltip={'JavaScript'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg'}
                    tooltip={'TypeScript'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'}
                    tooltip={'React'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://raw.githubusercontent.com/leungwensen/svg-icon/b84b3f3a3da329b7c1d02346865f8e98beb05413/dist/svg/logos/redux.svg'}
                    tooltip={'Redux'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://material-ui.com/static/logo_raw.svg'}
                    tooltip={'Material-UI'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'}
                    tooltip={'Ant Design'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg'}
                    tooltip={'Apollo Client'}
                    animation={'animate__backInRight'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg'}
                    tooltip={'jQuery'}
                    animation={'animate__backInRight'}/>
            </Grid>
        </>
    )
}

export {FrontEnd}
