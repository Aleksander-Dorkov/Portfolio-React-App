import React, {CSSProperties} from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import './css/ProjectStyles.css'
import {MavenSvg} from "./svgs/MavenSvg";
import {NpmSvg} from "./svgs/NpmSvg";
import {ListItemCode} from "./list/ListItemCode";
import {ListItemLink} from "./list/ListItemLink";
import {RdbmsSvg} from "./svgs/RdbmsSvg";
import {ApiSvg} from "./svgs/ApiSvg";
import {ProjectSection} from "./ProrjectSection";

function MovieDB() {
    const imageUrl = 'https://i.ibb.co/hKVWzWP/Untitled.png';
    const projectDescription=`
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
                    <Card>
                        <a href="https://online-movie-database.netlify.app/"
                           target={'_blank'}
                           className={'common-link'}
                           rel="noopener noreferrer">
                            <Typography variant={'h3'}
                                        color={'textPrimary'}
                                        style={{fontWeight: 'bold'}}
                                        className={'mb-5'}>
                                Online Movie Database (click)
                            </Typography>
                        </a>
                        <Grid item={true} xs={12} md={12} lg={9}>
                            <img src={imageUrl}
                                 alt={'not available'}
                                 style={{width: '100%', height: 'auto'}}/>
                        </Grid>
                        <CardContent>
                            <ProjectSection value={'Description'} description={projectDescription}/>

                            <ProjectSection value={'APIs'}/>
                            <ul style={listStyles}>
                                <ListItemLink svg={<ApiSvg/>}
                                              href={'https://theatre-database.herokuapp.com/playground'}
                                              value={'Spring Boot GraphQL (click)'}
                                              description={'- Written by me'}
                                />
                                <ListItemLink svg={<ApiSvg/>}
                                              href={'https://developers.themoviedb.org/3/getting-started/introduction'}
                                              value={'The Movie Database REST API (click)'}
                                              description={' - Public API'}
                                />
                            </ul>
                            <ProjectSection value={'Back End'}/>
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

                            <ProjectSection value={'Front End'}/>
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

                            <ProjectSection value={'Database'}/>
                            <ul style={listStyles}>
                                <ListItemCode svg={<RdbmsSvg/>} value={'PostgreSQL'}/>
                            </ul>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item={true} xs={12} md={12} lg={9}>
                </Grid>
            </Grid>
            <Grid container={true} alignItems={'center'} justify={'center'}>
                <Grid item={true} xs={12}>
                </Grid>
            </Grid>
        </>
    )
}

export {MovieDB}
