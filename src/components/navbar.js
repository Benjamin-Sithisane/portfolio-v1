import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

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
    return(
        <StyledNavBar>
             <div className="nav-container">
                <Link to='/'>Ben Sithisane</Link>

                <FaBars onClick={toggle}/>
                <ul className="nav-links">
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='projects'>Projects</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </div>
        </StyledNavBar>
    );
}

export default Navbar;