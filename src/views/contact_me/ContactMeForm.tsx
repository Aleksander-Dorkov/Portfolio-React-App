import React from "react";
import {TextField} from "@material-ui/core";


function ContactMeForm() {
    return (
        <>
            <form>
                <TextField id="standard-basic" label="Standard"/>
                <TextField id="standard-basic" label="Standard"/>
                <TextField id="standard-basic" label="Standard" multiline={true} rows={5}/>
            </form>
        </>
    )
}

export {ContactMeForm}
