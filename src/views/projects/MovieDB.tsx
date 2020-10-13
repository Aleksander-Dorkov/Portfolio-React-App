import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import './css/ProjectStyles.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {MavenSvg} from "./svgs/MavenSvg";
import {NpmSvg} from "./svgs/NpmSvg";
import {ListItemCode} from "./list/ListItemCode";
import {ListItemLink} from "./list/ListItemLink";
import {RdbmsSvg} from "./svgs/RdbmsSvg";
import {ApiSvg} from "./svgs/ApiSvg";

function MovieDB() {
    const imageUrl = 'https://i.ibb.co/hKVWzWP/Untitled.png';

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

                            <Typography variant={'subtitle1'}>
                                Description
                                Short Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Alias culpa
                                ducimus in iure iusto maxime minus molestiae non, perferendis praesentium quidem
                                ratione
                                <ul className={'root-list'} style={{paddingLeft: '10px'}}>
                                    <li>Uses 2 APIs</li>
                                    <ul className={'project-description-list'}>
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
                                    <li>Technologies Used</li>
                                    <ul className={'technologies-list'}>
                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Back End</li>
                                        <ul className={'technologies-used-list'}>
                                            <ListItemCode svg={<MavenSvg/>} value={'Spring Security'}/>
                                            <ListItemCode svg={<MavenSvg/>} value={'JJWT'} description={' JWT generator'}/>
                                            <ListItemCode svg={<MavenSvg/>} value={'GraphQL Java Kickstart'}/>
                                            <ul className={'technologies-used-list'}>
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

                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Front End</li>
                                        <ul className={'technologies-used-list'}>
                                            <ListItemCode svg={<NpmSvg/>} value={'Typescript'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'React'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'React Router Dom'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'React Redux'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'Apollo/client'}
                                                          description={' For GraphQL API calls'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'Material UI'}
                                                          description={' Component UI library'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'React Toastify'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'React Animate On Scroll'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'Axios'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'lodash'}/>
                                            <ListItemCode svg={<NpmSvg/>} value={'material-table'}
                                                          description={' Enhanced table for Material UI'}/>
                                        </ul>

                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Database</li>
                                        <ul className={'technologies-used-list'}>
                                            <ListItemCode svg={<RdbmsSvg/>} value={'PostgreSQL'}/>
                                        </ul>

                                    </ul>
                                </ul>
                            </Typography>
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
