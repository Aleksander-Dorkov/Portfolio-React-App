import React from "react";
import {Card, CardContent, Chip, Grid, Tooltip, Typography} from "@material-ui/core";
import './css/ProjectStyles.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {MavenSvg} from "./svgs/MavenSvg";
import {NpmSvg} from "./svgs/NpmSvg";
import {ListItem} from "./list/ListItem";
import {ListItemLink} from "./list/ListItemLink";
import {RdbmsSvg} from "./svgs/RdbmsSvg";

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
                                        <li>
                                            <a href="https://theatre-database.herokuapp.com/playground"
                                               target={'_blank'}
                                               className={'common-link'}
                                               rel="noopener noreferrer">
                                                <Typography variant={'subtitle1'}
                                                            color={'textPrimary'}>
                                                    Spring Boot GraphQL - Written by me (click)
                                                </Typography>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://developers.themoviedb.org/3/getting-started/introduction"
                                               target={'_blank'}
                                               className={'common-link'}
                                               rel="noopener noreferrer">
                                                <Typography variant={'subtitle1'}
                                                            color={'textPrimary'}>
                                                    The Movie Database REST API - Public API (click)
                                                </Typography>
                                            </a>
                                        </li>
                                    </ul>

                                    <li>Technologies Used</li>
                                    <ul className={'technologies-list'}>
                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Back End</li>
                                        <ul className={'technologies-used-list'}>
                                            <ListItem svg={<MavenSvg/>} value={'Spring Security'}/>
                                            <ListItem svg={<MavenSvg/>} value={'JJWT'} description={' JWT generator'}/>
                                            <ListItem svg={<MavenSvg/>} value={'GraphQL Java Kickstart'}/>
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
                                            <ListItem svg={<MavenSvg/>} value={'Spring Web'}/>
                                            <ListItem svg={<MavenSvg/>} value={'Spring Data JPA'}/>
                                            <ListItem svg={<MavenSvg/>} value={'Hibernate Validator'}/>
                                            <ListItem svg={<MavenSvg/>} value={'Spring Actuator'}/>
                                            <ListItem svg={<MavenSvg/>} value={'ModelMapper'}/>
                                            <ListItem svg={<MavenSvg/>} value={'Spring Devtools'}/>
                                            <ListItem svg={<MavenSvg/>} value={'Lombok'}/>
                                        </ul>

                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Front End</li>
                                        <ul className={'technologies-used-list'}>
                                            <ListItem svg={<NpmSvg/>} value={'Typescript'}/>
                                            <ListItem svg={<NpmSvg/>} value={'React'}/>
                                            <ListItem svg={<NpmSvg/>} value={'React Router Dom'}/>
                                            <ListItem svg={<NpmSvg/>} value={'React Redux'}/>
                                            <ListItem svg={<NpmSvg/>} value={'Apollo/client'}
                                                      description={' For GraphQL API calls'}/>
                                            <ListItem svg={<NpmSvg/>} value={'Material UI'}
                                                      description={' Component UI library'}/>
                                            <ListItem svg={<NpmSvg/>} value={'React Toastify'}/>
                                            <ListItem svg={<NpmSvg/>} value={'React Animate On Scroll'}/>
                                            <ListItem svg={<NpmSvg/>} value={'Axios'}/>
                                            <ListItem svg={<NpmSvg/>} value={'lodash'}/>
                                            <ListItem svg={<NpmSvg/>} value={'material-table'}
                                                      description={' Enhanced table for Material UI'}/>
                                        </ul>

                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Database</li>
                                        <ul className={'technologies-used-list'}>
                                            <ListItem svg={<RdbmsSvg/>} value={'PostgreSQL'}/>
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
