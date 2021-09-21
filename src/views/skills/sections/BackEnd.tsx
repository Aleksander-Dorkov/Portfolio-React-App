import React from "react";
import {Skill} from "../skill/Skill";
import {SkillSectionTitle} from "./SkillSectionTitle";
import {Grid} from "@material-ui/core";

function BackEnd() {
    return (
        <>
            <Grid container={true} justify={'center'} alignItems={'flex-start'}>
                <SkillSectionTitle value={'Back End'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/java/java-icon.svg'}
                    tooltip={'Java'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg'}
                    tooltip={'Spring Framework'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'}
                       tooltip={'Spring Web'}
                       animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://avatars.githubusercontent.com/u/7815877?s=200&v=4'}
                    tooltip={'Spring Cloud'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/images/projects/spring-security-b712a4cdb778e72eb28b8c55ec39dbd1.svg'}
                    tooltip={'Spring Security'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg'}
                    tooltip={'Spring Data JPA'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg'}
                    tooltip={'Hibernate'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://i.ibb.co/D74QSpz/thymeleaf-eddited.png'}
                       tooltip={'Thymeleaf and JSP'}
                       animation={'animate__backInLeft'}/>
                {/*<Skill svgUrl={'https://i.ibb.co/DwSDS6c/imageedit-1-9716598666.png    099'}*/}
                {/*       tooltip={'JSP'}*/}
                {/*       animation={'animate__backInLeft'}/>*/}
                <Skill
                    svgUrl={'https://junit.org/junit5/assets/img/junit5-logo.png'}
                    tooltip={'JUnit5 and Mockito'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://raw.githubusercontent.com/vscode-icons/vscode-icons/7dee48469efc251a6426e81c788482e2734f7b7d/icons/file_type_maven.svg'}
                    tooltip={'Maven'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/gradle/gradle-icon.svg'}
                    tooltip={'Gradle'}
                    animation={'animate__backInLeft'}/>
            </Grid>
        </>
    )
}

export {BackEnd}
