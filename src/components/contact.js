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

    .contact-button {
        padding: 25px;
    }
`;

const Contact = () => {
    return (
        <StyledContactSection>
            <p>
                I'm currently looking for opportunities! Feel free to drop a question or conversation
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