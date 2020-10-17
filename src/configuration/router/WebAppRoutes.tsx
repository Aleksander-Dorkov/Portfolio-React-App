import React from "react";
import {Route, Switch} from "react-router-dom";
import {LandingPage} from "../../views/LandingPage";
import {ResumePDF} from "../../views/resume/ResumePDF";

function WebAppRoutes() {
    return (
        <>
            <Switch>
                <Route exact={true} path="/">
                    <LandingPage/>
                </Route>
                <Route exact={true} path="/resume">
                    <ResumePDF/>
                </Route>
                <Route path="*">
                    <LandingPage/>
                </Route>
            </Switch>
        </>
    )
}

export {WebAppRoutes}
