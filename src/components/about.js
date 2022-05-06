import styled from 'styled-components';
const profilepic = require('../img/benprofilepic.jpg');

const StyledAboutSection = styled.section`
    margin: 0 200px;
    padding: 100px 0px;
    
    h1 {
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

    @media (max-width: 1300px) {
        padding: 0;
        margin: 0 0 75px 0;
        
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
    return (
        <StyledAboutSection>            
            <h1>About Me</h1>

            <div className='container'>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>

                <img src={profilepic} alt='Ben'/>
            </div> 
        </StyledAboutSection>
    );
}

export default About;