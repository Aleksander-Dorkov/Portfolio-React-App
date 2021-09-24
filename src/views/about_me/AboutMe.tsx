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
                    <Grid item={true} md={3} xs={12}>
                        <AboutMePicture/>
                    </Grid>
                    <Grid item={true} xs={11} md={8} className={'ml-4'}>
                        {/*previous jobs*/}
                        {/*VIVACOM*/}
                        <AboutMeSectionTitle title={'Software Engineer work experience'}/>
                        <AboutMeListTitle title={'VIVACOM'}
                                          role={'Full Stack Java Developer'}
                                          date={'December 2020 - Present'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Created and updated RESTful APIs consumed by mobile applications'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Maintained and enchased an existing Web Applications back-end and UI'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Designed web clients to consume RESTful web services'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Established communication between microservices with JSM (ActiveMQ Artemis)'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Deployed the newest versions of the application using Jenkins with blue-green deployment strategy'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Implemented unit and integration tests and documented the code'}/>
                        </ul>
                        {/*Илиянци*/}
                        <AboutMeSectionTitle title={'Other work experience'}/>
                        <AboutMeListTitle title={'Clothing Store - Iliyantsi'}
                                          role={'Sales Associate'}
                                          date={'April 2018 - September 2020'}/>
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
                        <AboutMeListTitle title={'GSM ONE'}
                                          role={'Sales Associate'}
                                          date={'February 2018 - Apr 2018'}/>
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Staying knowledgeable about our range of phone accessories'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Explaining the benefits and functions of products to customers'}/>
                            <AboutMeListItem
                                checkBoxSvg={true}
                                value={'Maintained orderly appearance in the store'}/>
                        </ul>
                        {/*My developers journey*/}
                        {/*personal projects*/}
                        <AboutMeSectionTitle title={'My developers journey'}/>
                        <AboutMeListTitle title={'Personal Projects'}
                                          role={'Projects i did with the purpose of becoming a better developer'}/>
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
                        <AboutMeListTitle title={'SoftUni Free Courses'}
                                          role={'I watched the SoftUni courses online from home and did the homeworks'}/>
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
                        {/*education*/}
                        <AboutMeSectionTitle title={'Education'}/>
                        <AboutMeListTitle title={'Technical University of Sofia'}

                        />
                        <ul style={{listStyleType: 'none'}}>
                            <AboutMeListItem
                                educationSvg={true}
                                value={'Mechanical Engineering Bachelors Degree'}/>
                        </ul>
                        <AboutMeListTitle title={'Lomonosov High School'}
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
