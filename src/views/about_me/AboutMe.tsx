import React from "react";
import {Card, Grid} from "@material-ui/core";


function AboutMe() {
    return (
        <Grid item={true} xs={11}>
            <Card elevation={10}>
                <Grid container={true}  spacing={5} xs={12}>
                    <Grid item={true} xs={4}>
                        <img src="https://i.ibb.co/PMMS8RW/pic-cropped.jpg" alt="not available" width={200} height={300}/>
                    </Grid>
                    <Grid item={true} xs={8}>
                        <p>My journey as a web developer began over two years ago. I have taught myself the basics of HTML, CSS and Javascript and have already got to know various frameworks such as ReactJS, GatsbyJS or NextJS.

                            In the meantime I have mastered them well and have a much deeper understanding of them. I have already gained professional experience and have implemented a number of customer projects.

                            I am also a registered part-time student at the Fernuni-Hagen. I am currently in 6 . Semester of the business informatics course.

                            In addition to my work, I of course have other hobbies such as doing sports and meeting friends and family.</p>
                        <ul>
                            <li>Work experience</li>
                            <li>asddsadas</li>
                            <li>dasdsa</li>
                            <li>ddasdas</li>
                            <li>asddassdaa</li>
                        </ul>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export {AboutMe}
