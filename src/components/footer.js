import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    background-color: var(--footer-color);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;

`;

const Footer = () => {
    return (
        <StyledFooter>
            <h1>Hello from Footer</h1>
        </StyledFooter>
    );
}

export default Footer;