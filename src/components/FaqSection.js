import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem insum dolor sit amet.</p>
                    <p>Lorem insum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem insum dolor sit amet.</p>
                    <p>Lorem insum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Differrent Payment Methods</h4>
                <div className="answer">
                    <p>Lorem insum dolor sit amet.</p>
                    <p>Lorem insum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem insum dolor sit amet.</p>
                    <p>Lorem insum dolor sit amet consectetur adipisicing elit. Odit, reprehenderit perferendis sunt magni dolores ratione.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
        color: #23d997;
    }

    h2 {
        font-weight: lighter;
        padding-bottom: 4rem;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`;

export default FaqSection;