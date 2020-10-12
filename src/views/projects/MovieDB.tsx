import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import './css/ProjectStyles.css'

function MovieDB() {
    const imageUrl = 'https://i.ibb.co/hKVWzWP/Untitled.png';
    return (
        <>
            <Grid container={true} justify={'center'} className={'mt-5'}>
                <Grid item={true} xs={11} md={11} lg={11}>
                    <Card>
                        <Typography variant={'h3'}
                                    style={{fontWeight: 'bold'}}
                                    className={'mb-5'}>
                            <a href="https://online-movie-database.netlify.app/"
                               target={'_blank'}
                               rel="noopener noreferrer">
                                Online Movie Database (click)
                            </a>
                        </Typography>
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
                                <ul>
                                    <li>Uses 2 APIs</li>
                                    <ul>
                                        <li>
                                            <a href="https://theatre-database.herokuapp.com/playground"
                                               target={'_blank'}
                                               rel="noopener noreferrer">
                                                Spring Boot GraphQL - Written by me (click)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://developers.themoviedb.org/3/getting-started/introduction"
                                               target={'_blank'}
                                               rel="noopener noreferrer">
                                                The Movie Database REST API - Public API (click)
                                            </a>
                                        </li>
                                    </ul>

                                    <li>Technologies Used</li>
                                    <ul>
                                        <li>Back End</li>
                                        <ul>
                                            <li>Spring boot</li>
                                            <li>Hibernate</li>
                                        </ul>

                                        <li>Front Eed</li>
                                        <ul>
                                            <li>React</li>
                                            <li>Redux</li>
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
