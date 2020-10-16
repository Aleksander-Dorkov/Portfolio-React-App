import React from "react";
import {Card, Grid, Typography} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import {AboutMeListTitle} from "./AboutMeListTitle";
import {AboutMeListItem} from "./AboutMeListItem";


function AboutMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <Grid container={true} spacing={5} xs={12}>
                    <Grid item={true} xs={3}>
                        <ScrollAnimation animateIn={'animate__zoomIn'} style={{display: 'block'}}>
                            <img src="https://i.ibb.co/PMMS8RW/pic-cropped.jpg"
                                 alt="not available"
                                 width={200}
                                 height={300}/>
                        </ScrollAnimation>
                    </Grid>

                    <Grid item={true} xs={8}>
                        <ScrollAnimation animateIn={'animate__zoomIn'} style={{display: 'block'}}>
                            <Typography variant={"h4"} className={'mt-2'} align={'center'}>
                                My developer journey
                            </Typography>
                            <AboutMeListTitle value={'Personal Projects'}
                                              description={'Project i did with the purpose of becoming a better developer.'}/>
                            <AboutMeListTitle value={'SoftUni Homeworks and Videos'}
                                              description={'I never went to SoftUni, just watched Youtube videos, witch they provide for free.'}/>
                            <Typography variant={"h4"} className={'mt-2'} align={'center'}>
                                Previous work experience
                            </Typography>
                            <AboutMeListTitle value={'GSMOne, Sales Consultant'}
                                              description={'My responsibilities are listed below. Unfortunately the firm bankrupted during the corona virus outbreak due to the lack of customers.'}/>
                            <ul style={{listStyleType: 'none'}}>
                                <AboutMeListItem
                                    value={'Recommend and select products for customers based on their individual needs'}/>
                                <AboutMeListItem
                                    value={'Maintain a working knowledge of the company\'s various products and services'}/>
                                <AboutMeListItem
                                    value={'Complete administrative tasks, such as processing and recording sales, as needed'}/>
                                <AboutMeListItem
                                    value={'Describe products and explain their benefits and uses to potential customers'}/>
                            </ul>

                            <AboutMeListTitle value={'Fantastico, Sales Consultant'}
                                              description={'My responsibilities are listed below.'}/>
                            <ul style={{listStyleType: 'none'}}>
                                <AboutMeListItem
                                    value={'Keep your area stocked, clean, and safe'}/>
                                <AboutMeListItem
                                    value={'Assist fellow associates as needed throughout the store'}/>
                                <AboutMeListItem
                                    value={'Help customers find the products they are looking for'}/>
                            </ul>
                        </ScrollAnimation>
                    </Grid>

                </Grid>
            </Card>
        </Grid>
    )
}

export {AboutMe}
