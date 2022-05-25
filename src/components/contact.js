import React from 'react';
import styled from 'styled-components';

const StyledContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75vh;

    p {
        margin: 75px 0;
    }

    @media (max-width: 1080px) {
        padding: 0;
        margin: 0 0;
        
        .container {
            flex-direction: column;
        }
    }
`;

const StyledContactButton = styled.button`
    border-style: solid;
    border-color: var(--accent-color);
    border-radius: 4px;
    font-family: 'Epilogue', sans-serif;
    font-size: 30px;
    background-color: var(--main-color);
    color: var(--font-color-p);


    :hover {
        filter: brightness(1.25);
        cursor: pointer;
        transition: 0.4s ease-in-out;    
    }

    .contact-button {
        padding: 25px;
    }
`;

const Contact = () => {
    return (
        <StyledContactSection id='contact'>
            <p>
               Feel free to drop a question or conversation
                I'll do my best to get back to you!
            </p>

            <StyledContactButton>
                <div className='contact-button'>
                    Contact Me!
                </div>
            </StyledContactButton>
        </StyledContactSection>
    );
}

export default Contact;