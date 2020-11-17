import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function AboutMePicture() {
    return (
        <>
            <ScrollAnimation animateIn={'animate__zoomIn'} style={{display: 'block'}}>
                <img src="https://i.ibb.co/PMMS8RW/pic-cropped.jpg"
                     alt="not available"
                     width={200}
                     height={300}/>

            </ScrollAnimation>
        </>
    )
}

export {AboutMePicture}
