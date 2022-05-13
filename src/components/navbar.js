import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";

const StyledNavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 25px;
    }

    .nav-container ul {
        padding: 0 25px;
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
    }
    
    .nav-container li a {
        padding: 0 15px;
        list-style-type: none;
        text-decoration: none;
        color: var(--font-color-p);
    }

    a {
        color: var(--font-color-p);
        padding: 0 15px;
        list-style-type: none;
        text-decoration: none;
    }

    svg {
        display: none;
        cursor: pointer;
    }

    svg:hover {
            transition: 0.3s ease-in-out;
            color: var(--accent-color);
    }

    .nav-container li a:hover {
        color: var(--accent-color);
        transition: 0.3s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        .nav-container ul {
            display: none;
        }

        svg {
            display: block;
            font-size: 2rem;
            cursor: pointer;
        }

    }
`;

const Navbar = ({ toggle }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const toggleContact = () => {
        scroll.scrollToBottom();
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return(
        <StyledNavBar>
             <div className="nav-container">
                <NavLink to='/' onClick={toggleHome}>Ben Sithisane</NavLink>

                <FaBars onClick={toggle}/>
                <ul className="nav-links">
                    <li><NavHashLink smooth to='#about' scroll={el => scrollWithOffset(el)}>About</NavHashLink></li>
                    <li><NavHashLink smooth to='#projects' scroll={el => scrollWithOffset(el)}>Projects</NavHashLink></li>
                    <li><NavLink to='contact' onClick={toggleContact}>Contact</NavLink></li>
                </ul>
            </div>
        </StyledNavBar>
    );
}

export default Navbar;