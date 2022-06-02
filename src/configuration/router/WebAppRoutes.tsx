import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LandingPage } from "../../views/LandingPage";


function WebAppRoutes() {
    return (
        <>
            <Switch>
                <Route exact={true} path="/">
                    <LandingPage/>
                </Route>
                <Route path="*">
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </>
    )
}

export { WebAppRoutes }
