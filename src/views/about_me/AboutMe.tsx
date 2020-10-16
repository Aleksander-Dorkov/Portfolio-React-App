import React from "react";
import {Card, Grid, Typography} from "@material-ui/core";
import {AboutMeListTitle} from "./AboutMeListTitle";
import {AboutMeListItem} from "./AboutMeListItem";
import {AboutMePicture} from "./AboutMePicture";


function AboutMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <Grid container={true} spacing={5} xs={12}>
                    <Grid item={true} xs={3}>
                        <AboutMePicture/>
                    </Grid>

                    <Grid item={true} xs={8}>
                        {/*personal projects*/}
                        <Typography variant={"h3"} className={'mt-2'} align={'center'} style={{fontWeight: 'bold'}}>
                            My developer journey
                        </Typography>
                        <AboutMeListTitle value={'Personal Projects'}
                                          description={'Projects i did with the purpose of becoming a better developer.'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Researched witch technologies are in the highest demand in the job marked and picked them for my projects'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Fallowed recommended best developer practises such as '}/>
                            <ul style={{listStyleType: 'none'}}>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'DRY - Don\'t Repeat Yourself'}/>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'S.O.L.I.D principles'}/>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'KISS Keep It Simple Stupid'}/>
                            </ul>

                            <AboutMeListItem
                                codeSvg={true}
                                value={'Improved my code quality during the month and a half or so it took me to write my personal projects (including this portfolio)'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Spend a lot of time fixing incredibly stupid bugs :('}/>
                        </ul>

                        {/*SoftUni*/}
                        <AboutMeListTitle value={'SoftUni Homeworks and Videos'}
                                          description={'I never went to SoftUni in person, just used the material they provide for free like videos and homeworks'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Watched the videos to understand the language/library/framework better'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Solved the homework problems Tested the solutions with the SoftUni Judge system'}/>
                            <ul style={{listStyleType: 'none'}}>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'Tested the homework solutions with the SoftUni Judge system'}/>
                            </ul>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Read other peoples code to see if there are any different solutions to the problem'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Passed all of the courses of the "Java Web Developer module"'}/>
                        </ul>

                        {/*previous jobs*/}
                        <Typography variant={"h3"} className={'mt-2'} align={'center'} style={{fontWeight: 'bold'}}>
                            Previous work experience
                        </Typography>
                        <AboutMeListTitle value={'GSMOne, Sales Consultant'}
                                          description={'My responsibilities are listed below. Unfortunately the firm bankrupted during the corona virus outbreak due to the lack of customers.'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Recommended and select products for customers based on their individual needs'}/>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Maintained a working knowledge of the company\'s various products and services'}/>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Completed administrative tasks, such as processing and recording sales, as needed'}/>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Described products and explain their benefits and uses to potential customers'}/>
                        </ul>

                        <AboutMeListTitle value={'Fantastico, Sales Consultant'}
                                          description={'My responsibilities are listed below.'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Kept my area stocked, clean, and safe'}/>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Assisted fellow associates as needed throughout the store'}/>
                            <AboutMeListItem
                                codeSvg={false}
                                value={'Helped customers find the products they are looking for'}/>
                        </ul>
                    </Grid>

                </Grid>
            </Card>
        </Grid>
    )
}

export {AboutMe}
