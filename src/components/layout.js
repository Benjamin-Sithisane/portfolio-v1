import React from 'react';
import Hero from "./hero";
import Navbar from './navbar';
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import styled from 'styled-components';

const StyledLayout = styled.div `
    margin: 0;
    padding: 0 150px;
    min-height: 100vh;

    @media (max-width: 1080px) {
        padding: 0 40px;
        flex-direction: column;
    }
`;

const Layout = () => {
    return (
        <>
            <Navbar />
            <StyledLayout>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </StyledLayout>
            <Footer /> 
        </>
    );
}

export default Layout;