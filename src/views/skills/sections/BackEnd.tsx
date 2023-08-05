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
                    svgUrl={'https://spring.io/img/projects/spring-boot.svg'}
                    tooltip={'Spring Framework'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://www.vectorlogo.zone/logos/springio/springio-icon.svg'}
                       tooltip={'Spring Web'}
                       animation={'animate__backInLeft'}/>
                {/*<Skill*/}
                {/*    svgUrl={'https://spring.io/img/projects/spring-cloud.svg'}*/}
                {/*    tooltip={'Spring Cloud'}*/}
                {/*    animation={'animate__backInLeft'}/>*/}
                <Skill
                    svgUrl={'https://spring.io/img/projects/spring-security.svg'}
                    tooltip={'Spring Security'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://spring.io/img/projects/spring-data.svg'}
                    tooltip={'Spring Data JPA'}
                    animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg'}
                    tooltip={'Hibernate'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://www.thymeleaf.org/images/thymeleaf.png'}
                       tooltip={'Thymeleaf and JSP'}
                       animation={'animate__backInLeft'}/>
                <Skill
                    svgUrl={'https://www.vectorlogo.zone/logos/grpcio/grpcio-ar21.svg'}
                    tooltip={'gRPC'}
                    animation={'animate__backInLeft'}/>
                <Skill svgUrl={'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg'}
                       tooltip={'Kafka'}
                       animation={'animate__backInLeft'}/>
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
