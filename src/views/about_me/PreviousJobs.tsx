import React from "react";
import {Typography} from "@material-ui/core";
import {AboutMeListItem} from "./AboutMeListItem";


function PreviousJobs() {
    return (
        <>
            <Typography variant={"h5"} className={'mt-2'} align={'center'}>
                Previous job experience
            </Typography>
            <a href="https://www.jobs.bg/company/274037"
               target={'_blank'}
               rel="noopener noreferrer">adsdas
            </a>
            <ul style={{listStyleType: 'none'}}>
                <AboutMeListItem
                    value={'Recommesnd and select products for customers based on their individual needs'}/>
                <AboutMeListItem
                    value={'Maintain a working knowledge of the company\'s various products and services'}/>
                <AboutMeListItem
                    value={'Complete administrative tasks, such as processing and recording sales, as needed'}/>
                <AboutMeListItem
                    value={'Describe products and explain their benefits and uses to potential customers'}/>
            </ul>
        </>
    )
}

export {PreviousJobs}
