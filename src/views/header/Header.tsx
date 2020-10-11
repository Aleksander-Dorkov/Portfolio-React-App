import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

interface Props {

}

function Header(props: Props) {
    return (
        <>
            <AppBar position="static" color={'secondary'}>
                <Toolbar>
                    <Typography variant="h6">
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export {Header}
