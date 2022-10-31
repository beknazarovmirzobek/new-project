import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="/">1. About Us</a>
                </li>
                <li>
                    <a href="/work">2. Our Work</a>
                </li>
                <li>
                    <a href="/contact">3. Contact Us</a>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 0 10rem;
    align-items: center;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    a {
        text-decoration: none;
        color: #fff;
    }

    ul {
        list-style: none;
        display: flex;
        
        li {
            padding-left: 8rem;
            position: relative;

            a {
                text-decoration: none;
                color: #fff;
                font-size: 1rem;
            }
        }
    }

    #logo {
        font-size: 1.5rem;
        font-family: 'forte', cursive;
        font-weight: lighter;
    }
`

export default Nav;