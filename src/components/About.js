import React from "react";
import home1 from '../nancy/wp5090687-momoland-nancy-4k-wallpapers.jpg';

const AboutSection = () => {
    return (
        <div>
            <div className="discription">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dram</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>
                <p>Contact us for any photography or vediography ideas that you have. We have profisianals with amazing skills to help you achieve it.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="shunchaki rasm"/>
            </div>
        </div>
    )
}

export default AboutSection;