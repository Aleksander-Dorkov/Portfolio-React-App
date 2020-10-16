import React from "react";
import {Typography} from "@material-ui/core";
import {HashLink} from "react-router-hash-link";

interface Props {

}

function DeveloperHistory(props: Props) {
    return (
        <>
            <Typography variant={'h4'} align={'center'} className={'mt-1'}>
                My journey as a web developer
            </Typography>
            <Typography variant={"subtitle1"} className={'mt-2'} align={'center'}>
                My journey as a Web Developer began a year ago. I have learned the basics of
                Java, SQL, Hibernate, JPA, Spring Boot, HTML, CSS and Javascript, React and various other
                libraries from watching SoftUni videos.
            </Typography>
            <Typography variant={"subtitle1"} className={'mt-2'} align={'center'}>
                In the meantime I have mastered them well and have a much deeper understanding of them.
                I have already gained professional experience and have implemented a number of&nbsp;
                <HashLink to="#projectSection">
                    <Typography color={'textSecondary'}
                                style={{textDecoration: 'none', display: 'inline-block'}}>
                        custom projects
                    </Typography>
                </HashLink>
                and solving SoftUni homeworks
            </Typography>
        </>
    )
}

export {DeveloperHistory}
