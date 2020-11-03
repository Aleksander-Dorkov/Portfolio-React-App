import React from "react";
import {Card, Grid} from "@material-ui/core";
import {AboutMeListTitle} from "./AboutMeListTitle";
import {AboutMeListItem} from "./AboutMeListItem";
import {AboutMePicture} from "./AboutMePicture";
import {AboutMeSectionTitle} from "./AboutMeSectionTitle";


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
                        <AboutMeSectionTitle title={'My developers journey'}/>
                        <AboutMeListTitle value={'Personal Projects'}
                                          description={'Projects i did with the purpose of becoming a better developer'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Fallowed recommended best developer practises such as'}/>
                            <ul style={{listStyleType: 'none'}}>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'DRY - Don\'t Repeat Yourself'}/>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'KISS - Keep It Simple Stupid'}/>
                                <AboutMeListItem
                                    codeSvg={true}
                                    value={'S.O.L.I.D principles'}/>
                            </ul>

                            <AboutMeListItem
                                codeSvg={true}
                                value={'Improved my code quality during the month and a half or so it took me to write my personal projects (including this portfolio)'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Researched witch technologies are in the highest demand in the job marked and picked them for my projects'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Spend a lot of time fixing the dumbest bugs ever :('}/>
                        </ul>

                        {/*SoftUni*/}
                        <AboutMeListTitle value={'SoftUni Free Courses'}
                                          description={'I never went to SoftUni in person, just used the materials they provide for free like videos and homeworks'}/>
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
                                value={'Inspected other peoples code to see if there are any different solutions to the problem'}/>
                            <AboutMeListItem
                                codeSvg={true}
                                value={'Passed through all of the courses of the "Java Web Developer module"'}/>
                        </ul>

                        {/*previous jobs*/}
                        <AboutMeSectionTitle title={'Previous work experience'}/>
                        <AboutMeListTitle value={'Clothing Store'}
                                          description={'April 2018 - September 2020. My responsibilities are listed below.'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Assisted team members as needed throughout the store'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Found solutions to client problems'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Consulted clients to help them make the right purchases'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Maintained orderly appearance in the store'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Loaded goods from the warehouse\n'}/>
                        </ul>

                        {/*<AboutMeListTitle value={'Fantastico, Sales Consultant'}*/}
                        {/*                  description={'My responsibilities are listed below'}/>*/}
                        {/*<ul style={{listStyleType: 'none'}}>*/}
                        {/*    <AboutMeListItem*/}
                        {/*        checkBoxSvg={true}*/}
                        {/*        value={'Kept my area stocked, clean, and safe'}/>*/}
                        {/*    <AboutMeListItem*/}
                        {/*        checkBoxSvg={true}*/}
                        {/*        value={'Assisted fellow associates as needed throughout the store'}/>*/}
                        {/*    <AboutMeListItem*/}
                        {/*        checkBoxSvg={true}*/}
                        {/*        value={'Helped customers find the products they are looking for'}/>*/}
                        {/*</ul>*/}

                        {/*education*/}
                        <AboutMeSectionTitle title={'Education'}/>
                        <AboutMeListTitle value={'Technical University of Sofia'}
                        />
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                educationSvg={true}
                                value={'Mechanical Engineering Bachelors Degree'}/>
                        </ul>
                        <AboutMeListTitle value={'Lomonosov High School'}
                        />
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                educationSvg={true}
                                value={'Audio Systems and Cinema Diploma'}/>
                        </ul>
                    </Grid>

                </Grid>
            </Card>
        </Grid>
    )
}

export {AboutMe}
