import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import bg1 from '../assets/Raja_Decors_logo.png';
import bg2 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_15330b37.jpg';
import bg3 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_827abe77.jpg';
import bg4 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_9af52197.jpg';
import bg5 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg';

function Carousel() {
    const sliderImages = [
        {
            url: bg1,
        },
        {
            url: bg2,
        },
        {
            url: bg3,
        },
        {
            url: bg4,
        },
        {
            url: bg5,
        },
    ];
    return (
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
            <SimpleImageSlider
                width={1349}
                height={300}
                images={sliderImages}
                showNavs={true}
                style={{ position: "absolute", top: 0, left: 0 }}
                interval={5000} // Set the interval for slide transition (milliseconds)
            />
        </div>
    );
}

export default Carousel;
