import React, {CSSProperties} from "react";
import {Card, CardContent, Grid} from "@material-ui/core";
import {MavenSvg} from "./svgs/MavenSvg";
import {NpmSvg} from "./svgs/NpmSvg";
import {ListItemCode} from "./project_list/ListItemCode";
import {ListItemLink} from "./project_list/ListItemLink";
import {RdbmsSvg} from "./svgs/RdbmsSvg";
import {ApiSvg} from "./svgs/ApiSvg";
import {ProjectSubTitle} from "./project_commons/ProjectSubTitle";
import {ProjectTitle} from "./project_commons/ProjectTitle";
import {ProjectImage} from "./project_commons/ProjectIamge";

function MovieDB() {
    const projectDescription = `
        SPA WebApp that allows users to brows movies, tv shows, actors. Add favorites, submit comments
    `
    const listStyles = {
        listStyleType: 'none',
        marginTop: '0px'
    } as CSSProperties
    return (
        <>
            <Grid container={true} justify={'center'} className={'mt-5'}>
                <Grid item={true} xs={11} md={11} lg={11}>
                    <Card elevation={10}>
                        <ProjectTitle name={'Online Movie Database'}
                                      githubBackEnd={'https://github.com/Aleksander-D-92/Movie-DB-GraphQL-API'}
                                      githubFrontEnd={'https://github.com/Aleksander-D-92/Movie-DB-Front-End'}
                                      deployedUrl={'https://online-movie-database.netlify.app/'}/>
                        <ProjectImage imageUrl={'https://i.ibb.co/hKVWzWP/Untitled.png'}/>
                        <CardContent>
                            <ProjectSubTitle value={'Description'} description={projectDescription}/>
                            <ProjectSubTitle value={'APIs'} description={'Uses 2 APIs'}/>
                            <ul style={listStyles}>
                                <ListItemLink svg={<ApiSvg/>}
                                              href={'https://theatre-database.herokuapp.com/playground'}
                                              value={'Spring Boot GraphQL (click)'}
                                              description={'- Written by me. Handles User Register/Login/Logout, authentication. Submitting, editing, deleting comments. Adding/Removing to favorites'}
                                />
                                <ListItemLink svg={<ApiSvg/>}
                                              href={'https://developers.themoviedb.org/3/getting-started/introduction'}
                                              value={'The Movie Database REST API (click)'}
                                              description={' - Public API. Handles the rest of the operations.'}
                                />
                            </ul>
                            <ProjectSubTitle value={'Back End Dependencies'} description={'Written in Java 11'}/>
                            <ul style={listStyles}>
                                <ListItemCode svg={<MavenSvg/>} value={'Spring Security'}/>
                                <ListItemCode svg={<MavenSvg/>} value={'JJWT'} description={'- JWT generator'}/>
                                <ListItemCode svg={<MavenSvg/>} value={'GraphQL Java Kickstart'}/>
                                <ul style={listStyles}>
                                    <ListItemLink svg={<MavenSvg/>}
                                                  href={'https://theatre-database.herokuapp.com/playground'}
                                                  value={'Playground (click)'}/>
                                    <ListItemLink svg={<MavenSvg/>}
                                                  href={'https://theatre-database.herokuapp.com/graphiql'}
                                                  value={`GraphiQL (click)`}/>
                                    <ListItemLink svg={<MavenSvg/>}
                                                  href={'https://theatre-database.herokuapp.com/voyager'}
                                                  value={'Voyager (click)'}/>
                                </ul>
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
                                <ListItemCode svg={<NpmSvg/>} value={'Apollo/client'}
                                              description={'- For GraphQL API calls'}/>
                                <ListItemCode svg={<NpmSvg/>} value={'Material UI'}
                                              description={'- Component UI library'}/>
                                <ListItemCode svg={<NpmSvg/>} value={'React Toastify'}/>
                                <ListItemCode svg={<NpmSvg/>} value={'React Animate On Scroll'}/>
                                <ListItemCode svg={<NpmSvg/>} value={'Axios'}/>
                                <ListItemCode svg={<NpmSvg/>} value={'lodash'}/>
                                <ListItemCode svg={<NpmSvg/>} value={'material-table'}
                                              description={'- Enhanced table for Material UI'}/>
                            </ul>

                            <ProjectSubTitle value={'Database'}/>
                            <ul style={listStyles}>
                                <ListItemCode svg={<RdbmsSvg/>} value={'PostgreSQL'}/>
                            </ul>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export {MovieDB}
