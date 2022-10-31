import React from "react";
import home1 from '../img/home1.png'
import { About, Description, Hide, Image } from "../styles";


const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dream</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or vediography ideas that you have. We have profisianals with amazing skills to help you achieve it.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="shunchaki rasm"/>
            </Image>
        </About>
    )
}



export default AboutSection;