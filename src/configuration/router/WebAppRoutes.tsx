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
                <Route path="*">
                    <LandingPage/>
                </Route>
            </Switch>
        </>
    )
}

export {WebAppRoutes}
