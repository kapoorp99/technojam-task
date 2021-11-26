import styled from 'styled-components'

export const MainContainer = styled.div`
    top: 0;
    z-index: 2;
    width: 100%;
    background-color: #141414;
    color: black;
    position: sticky;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const MobileHeading = styled.div`
    text-align: center;
    margin: 0.5rem;
    width: 100%;
    font-variant: small-caps;
    font-size: large;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.2rem;
`;