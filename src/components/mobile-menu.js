import React from "react";
import styled from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const StyledMobileMenu = styled.nav`
    display: none;
    svg {
        position: relative;
        font-size: 3rem;
        top: -45px;
        left: 325px;
    }

    svg:hover {
        transition: 0.3s ease-in-out;
        color: var(--accent-color);
    }

    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 999;
        width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
        height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
        display: grid;
        align-items: center;
        top: 0;
        right: 0;        
        transition: 0.4s ease-in-out;
        background-color: var(--main-color);
        opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
        top: ${({ isOpen }) => (isOpen ? '0' : '-100')};

        ul {
            display: grid;
            padding: 0;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 80px);
            list-style: none;
            text-align: center;
        }

        li a {
            font-size: 2rem;
            color: var(--font-color);
            text-decoration: none;
            text-align: center;
        }

        li a:hover {
            transition: 0.3s ease-in-out;
            color: var(--accent-color);
        }
    }
`;

const MobileMenu = ({ isOpen, toggle }) => {
    const toggleContact = () => {
        scroll.scrollToBottom();   
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <StyledMobileMenu isOpen={isOpen} onClick={toggle}>
            <FaTimes isOpen={isOpen} onClick={toggle}/>

            <ul>
                <li><NavHashLink smooth to='#about' scroll={el => scrollWithOffset(el)}>About</NavHashLink></li>
                <li><NavHashLink smooth to='#projects' scroll={el => scrollWithOffset(el)}>Projects</NavHashLink></li>
                <li><NavLink to='contact' onClick={toggleContact}>Contact</NavLink></li>
            </ul>
        </StyledMobileMenu>
    );
}

export default MobileMenu;