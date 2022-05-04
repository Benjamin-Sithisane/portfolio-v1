import styled from "styled-components";

const StyledNavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;

    a {
        color: var(--font-color-p);
        padding: 0 15px;
        list-style-type: none;
        text-decoration: none;
    }
`;

const StyledNavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;

    ul {
        padding: 0 25px;
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
    }

    li a {
        padding: 0 15px;
        list-style-type: none;
        text-decoration: none;
        color: var(--font-color-p);
    }
`;

const Navbar = () => {
    return (
        <StyledNavBar>
            <StyledNavBarContainer>
                <a href="#">Ben Sithisane</a>
                
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </StyledNavBarContainer>
        </StyledNavBar>
    );
}

export default Navbar;