import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 150px;
    padding: 100px 0;

    h1 {
        margin: 0 0 25px 0;
    }

    .grid {
        display: grid;
        gap: 25px;
    }

    .project-card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s
    }

    .project-card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    .picture-placeholder {
        border-style: solid;
        border-width: 1px;
        min-height: 350px;
        min-width: 250px;
    }

    .info-container {
        padding: 2px 16px;
    }

    @media (max-width: 1080px) {
        padding: 0;
        margin: 0 0 100px 0;
        
        .container {
            display: grid;
            flex-direction: column;
        }
    }
`;

const Projects = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1500,
        });
    }, []);

    return (
        <StyledProjectsSection id='projects'>
            <h1>Some Projects I worked on.</h1>

            <div className='grid'>
                <div className="project-card" id='one'>
                    <div className='picture-placeholder'></div>
                    <div className='info-container'>
                        <h2>1</h2>
                    </div>
                </div>
                <div className="project-card" id='two' data-aos='fade-up' data-aos-placement='#one'>
                    <div className='picture-placeholder'></div>
                    <div className='info-container'>
                        <h2>1</h2>
                    </div>
                </div>
                <div className="project-card" id='three' data-aos='fade-up' data-aos-placement='#two'>
                    <div className='picture-placeholder'></div>
                    <div className='info-container'>
                        <h2>1</h2>
                    </div>
                </div>
            </div>
        </StyledProjectsSection>
    );
}

export default Projects;