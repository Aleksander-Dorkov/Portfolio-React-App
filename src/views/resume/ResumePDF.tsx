import React, {useEffect, useRef} from "react";
import {Paper} from "@material-ui/core";
import WebViewer from '@pdftron/webviewer'

function ResumePDF() {
    const viewerDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        WebViewer({
            isReadOnly: true,
            useDownloader: true,
            path: 'lib',
            initialDoc: 'Aleksander-Dorkov-Resume.pdf'
        }, viewerDiv.current as HTMLDivElement).then((instance) => {

        })
    }, [])
    return (
        <>
            <Paper className={'mt-5'}>
                <div style={{height: '100vh', marginTop: '4rem'}} ref={viewerDiv}></div>
            </Paper>
        </>
    )
}

export {ResumePDF}
