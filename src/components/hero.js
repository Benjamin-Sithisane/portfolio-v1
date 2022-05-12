import React from 'react';
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

const Hero = () => {
    return (
        <StyledHeroSection>
            <h1>Hey there, I'm a guy who code things.</h1>
            <p>Ben's the name and I'm a software developer.</p>
        </StyledHeroSection>  
    );
}

export default Hero;