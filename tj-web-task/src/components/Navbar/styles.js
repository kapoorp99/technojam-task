import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    margin: 0.5rem;
    font-variant: small-caps;
    font-size: large;
    font-weight: 400;
    color: #ffffff;
    :hover{
        transform: scale(0.8);
        border: 2px solid #ffffff;
    }
`;