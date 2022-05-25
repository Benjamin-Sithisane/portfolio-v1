import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
const profilepic = require('../img/benprofilepic.jpg');

const StyledAboutSection = styled.section`
    margin: 0 200px;
    padding: 100px 0px;

    h1 {
        font-size: 2rem;
        margin: 0 0 15px 10px;
    }

    img {
        max-height: 350px;
        max-width: 250px;
        border-radius: 15%;
    }

    .title-container {
        display: flex;
    }

    .line::after {
        height: 2px;
        background-color: var(--accent-color);
        margin: 0 0 10px 0;
    }

    .container {
        padding: 10px;
        display: flex;
        grid-template-columns: 3fr 2fr;
        gap: 50px;
    }

    p {
        margin: 0 0px 15px;
        font-size: 25px;
    }

    u {
        color: var(--accent-color);
        text-decoration: none;
    }

    @media (max-width: 1300px) {
        padding: 0;
        margin: 0 0 75px 0;
        height: auto;

        p {
            font-size: 18px;
        }

        .about-title {
            margin-bottom: 25px;
        }

        .container {
            flex-direction: column;
            align-items: center;
        }
    }
`;

const About = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1500,
        });
    }, []);

    return (
        <StyledAboutSection id='about'  data-aos='fade-up'>            
            <h1>About Me</h1>

            <div className='container'>
                <div>
                    <p>I became passionate about software from the day I first used a computer. I've learned a 
                        variety of technical skill sets through self-learning. I've learned programming languages like
                        <u> JavaScript</u>, <u>HTML</u>, <u>CSS</u>. Now, I am a hobbyist trying to break-in a career into
                        Software Developement!
                    </p>
                </div>

                <img src={profilepic} alt='Ben'/>
            </div> 
        </StyledAboutSection>
    );
}

export default About;