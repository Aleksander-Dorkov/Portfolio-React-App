import React, {useEffect, useRef} from "react";
import WebViewer from '@pdftron/webviewer'

function ResumePDF() {
    const viewerDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        WebViewer({
            isReadOnly: true,
            path: 'lib',
            initialDoc: '%PUBLIC_URL%/Aleksander-Dorkov-Resume.pdf'
        }, viewerDiv.current as HTMLDivElement).then(() => {

        })
    }, [])
    return (
        <>
            <div style={{height: '100vh', marginTop: '4rem'}} ref={viewerDiv}></div>
        </>
    )
}

export {ResumePDF}
