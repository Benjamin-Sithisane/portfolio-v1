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
    border-radius: 10%;
    width: 150px;
    height: 75px;
`;

const Contact = () => {
    return (
        <StyledContactSection>
            <h1>Hello from the Contact section</h1>
            <p>
                I'm currently looking for opportunities! Feel free to drop a question or conversation
                I'll do my best to get back to you!.
            </p>

            <StyledContactButton>Contact Me!</StyledContactButton>
        </StyledContactSection>
    );
}

export default Contact;