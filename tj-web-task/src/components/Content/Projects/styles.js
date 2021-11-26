import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 2px solid #141414;
    height: 100%;
    margin: 1rem;
    padding: 2rem;
    >.heading {
        >h1{
            margin: 1rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.2rem;
        }
    }
    >.projects {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 1rem;
        padding: 0.5rem;
    }
`;