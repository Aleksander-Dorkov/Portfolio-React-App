import React from "react";
import {Card, CardContent, Chip, Grid, Tooltip, Typography} from "@material-ui/core";
import './css/ProjectStyles.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {MavenSvg} from "./svgs/MavenSvg";
import {NpmSvg} from "./svgs/NpmSvg";

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
                                            <li>
                                                <MavenSvg/>
                                                <Typography className={'code-text'}>Spring Security</Typography>
                                            </li>
                                            <li>
                                                <MavenSvg/>
                                                <Typography className={'code-text'}>JJWT</Typography> JWT generator
                                            </li>
                                            <li>
                                                <MavenSvg/>
                                                <Typography className={'code-text'}>
                                                    GraphQL Java Kickstart
                                                </Typography>
                                                <ul className={'technologies-used-list'}>
                                                    <li>
                                                        <MavenSvg/>
                                                        <a href="https://theatre-database.herokuapp.com/playground">
                                                            <Typography className={'code-text'}>Playground (click)
                                                            </Typography>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <MavenSvg/>
                                                        <a href="https://theatre-database.herokuapp.com/graphiql">
                                                            <Typography className={'code-text'}>Graph<i>i</i>QL (click)
                                                            </Typography>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <MavenSvg/>
                                                        <a href="https://theatre-database.herokuapp.com/voyager">
                                                            <Typography className={'code-text'}>Voyager (click)
                                                            </Typography>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><MavenSvg/><Typography className={'code-text'}>Spring Web</Typography></li>
                                            <li><MavenSvg/><Typography className={'code-text'}>Spring Data JPA</Typography></li>
                                            <li><MavenSvg/><Typography className={'code-text'}>Hibernate Validator</Typography>
                                            </li>
                                            <li><MavenSvg/><Typography className={'code-text'}>Spring Actuator</Typography></li>
                                            <li><MavenSvg/><Typography className={'code-text'}>ModelMapper</Typography></li>
                                            <li><MavenSvg/><Typography className={'code-text'}>Spring Devtools</Typography></li>
                                            <li><MavenSvg/><Typography className={'code-text'}>Lombok</Typography></li>
                                        </ul>

                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Front End</li>
                                        <ul className={'technologies-used-list'}>
                                            <li><NpmSvg/><Typography className={'code-text'}>Typescript</Typography></li>
                                            <li><Typography className={'code-text'}>React</Typography></li>
                                            <li><Typography className={'code-text'}>React Router Dom</Typography></li>
                                            <li><Typography className={'code-text'}>React Redux</Typography></li>
                                            <li><Typography className={'code-text'}>Apollo/client</Typography> For
                                                GraphQL API calls
                                            </li>
                                            <li><Typography className={'code-text'}>Material UI</Typography> Component
                                                UI library
                                            </li>
                                            <li><Typography className={'code-text'}>React Toastify</Typography></li>
                                            <li><Typography className={'code-text'}>React Animate On Scroll</Typography>
                                            </li>
                                            <li><Typography className={'code-text'}>Axios</Typography></li>
                                            <li><Typography className={'code-text'}>lodash</Typography></li>
                                            <li><Typography className={'code-text'}>material-table</Typography> Enhanced
                                                table for Material UI
                                            </li>
                                        </ul>

                                        <PlayArrowIcon className={'list-svg'}/>
                                        <li>Database</li>
                                        <ul className={'technologies-used-list'}>
                                            <li><Typography className={'code-text'}>PostgreSQL</Typography> RDBMS</li>
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
