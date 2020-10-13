import React, {CSSProperties} from "react";
import {Card, CardContent, Grid} from "@material-ui/core";
import {ProjectTitle} from "./project_section/ProjectTitle";
import {ProjectImage} from "./project_section/ProjectIamge";
import {ProjectSubTitle} from "./project_section/ProjectSubTitle";
import {ListItemLink} from "./list/ListItemLink";
import {ApiSvg} from "./svgs/ApiSvg";
import {ListItemCode} from "./list/ListItemCode";
import {RdbmsSvg} from "./svgs/RdbmsSvg";
import {NpmSvg} from "./svgs/NpmSvg";
import {MavenSvg} from "./svgs/MavenSvg";

function BugTracker() {
    const projectDescription = `
        SPA WebApp that imitates a Bug Tracker. Users can create Projects, submit Tickets, resolve Tickets
        comment on this tickets.
    `
    const listStyles = {
        listStyleType: 'none',
        marginTop: '0px'
    } as CSSProperties

    return (
        <Grid container={true} justify={'center'} className={'mt-5'}>
            <Grid item={true} xs={11} md={11} lg={11}>
                <Card elevation={10}>
                    <ProjectTitle name={'Bug Tracker'}
                                  githubBackEnd={'https://github.com/Aleksander-D-92/Issue-Bug-Treacker-REST-API'}
                                  githubFrontEnd={'https://github.com/Aleksander-D-92/Issue-Bug-Treacker-Front-End'}
                                  deployedUrl={'https://destroy-bugs.netlify.app/'}/>
                    <ProjectImage imageUrl={'https://i.ibb.co/0Fh3S0y/image.png'}/>
                    <CardContent>
                        <ProjectSubTitle value={'Description'} description={projectDescription}/>
                        <ProjectSubTitle value={'API'} description={'Uses a single API'}/>
                        <ul style={listStyles}>
                            <ListItemLink svg={<ApiSvg/>}
                                          href={'https://destroy-bugs.herokuapp.com/swagger-ui.html'}
                                          value={'Spring Boot REST API (click)'}
                                          description={'- REST endpoints documentation. Swagger UI'}
                            />
                        </ul>
                        <ProjectSubTitle value={'Back End Dependencies'} description={'Written in Java 11'}/>
                        <ul style={listStyles}>
                            <ListItemCode svg={<MavenSvg/>} value={'Spring Security'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'JJWT'} description={'- JWT generator'}/>
                            <ListItemLink svg={<MavenSvg/>} href={'https://destroy-bugs.herokuapp.com/swagger-ui.html'}
                                          value={'Springfox Swagger UI (click)'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'Spring Web'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'Spring Data JPA'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'Hibernate Validator'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'Spring Actuator'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'ModelMapper'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'Spring Devtools'}/>
                            <ListItemCode svg={<MavenSvg/>} value={'Lombok'}/>
                        </ul>

                        <ProjectSubTitle value={'Front End Dependencies'} description={'Written in Typescript 3'}/>
                        <ul style={listStyles}>
                            <ListItemCode svg={<NpmSvg/>} value={'Typescript'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'React'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'React Router Dom'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'React Redux'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'Ant Design'}
                                          description={'- Component UI library'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'Framer Motion'}
                                          description={'- For route transition animation'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'React Toastify'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'React Chartjs 2'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'React Animate On Scroll'}/>
                            <ListItemCode svg={<NpmSvg/>} value={'Axios'}/>
                        </ul>

                        <ProjectSubTitle value={'Database'}/>
                        <ul style={listStyles}>
                            <ListItemCode svg={<RdbmsSvg/>} value={'PostgreSQL'}/>
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export {BugTracker}
