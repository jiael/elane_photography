import React,{useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './About.css';

const About = () => {
   
    return(
        <>
            <div class="profile">
                <div class="about-container">
                    <div class="about-text">
                        <h2>
                            Hi I'm Elayne
                        </h2>
                        <p class="about-text-small">
                        &#128205; East Coast
                        </p>
                        <p>
                            A hobbyist capturing the beautiful moments in life! I got into photography in 2018, when I started taking my camera on family hikes and fell in love with nature photography. You'll find me out there taking shots of landscapes, wildlife and plants! 
                        </p>
                        <p>
                            See you out there~
                        </p>
                    </div>
                    <div class="about-pic">
                        <img src="/images/camera-photo.jpg" height={400}/>
                    </div>
                </div>
                   
            </div>
        </>
    );
};

export default About;