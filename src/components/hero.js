import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from "styled-components";

const StyledHeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    margin: 0 200px;
    font-size: 25px;
    
    p {
        color: var(--accent-color);
        margin: 0;
    }

    @media (max-width: 1080px) {
        margin: 0;
    }
`;

function Hero() {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, []);

    return (
        <StyledHeroSection data-aos='fade-up'>
            <h1>Hey there, I'm a guy who code things.</h1>
            <p>Ben's the name and I'm a software developer.</p>
        </StyledHeroSection>  
    );
}

export default Hero;