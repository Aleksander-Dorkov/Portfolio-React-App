import React from "react";
import {Route, Switch} from "react-router-dom";
import {LandingPage} from "../../views/LandingPage";

function WebAppRoutes() {
    return (
        <>
            <Switch>
                <Route exact={true} path="/">
                    <LandingPage/>
                </Route>
                <Route exact={true} path="/resume">
                    <h1>nekvo resume</h1>
                </Route>
                <Route exact={true} path="*">
                    <LandingPage/>
                </Route>
            </Switch>
        </>
    )
}

export {WebAppRoutes}
