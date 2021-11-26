import styled from 'styled-components'

export const MainContainer = styled.div`
    border: 2px solid #141414;
    height: 100vh;
    margin: 1rem;
    padding: 2rem;
    background-color: #141414;
    @media (max-width: 768px) {
            margin: 0.5rem;
            padding: 0.5rem;
        }
>form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    >h1{
        margin: 0.5rem;
        color: #ffffff;
    }
    >h2{
        margin: 0.5rem;
        color: #ffffff;
        font-size: large;
        font-weight: 200;
    }
    >input {
        width: 50%;
        padding: 1rem;
        margin: 1rem;
        @media (max-width: 768px) {
            width: 100%;
            margin: 0.5rem;
        }
    }
    >textarea {
        width: 50%;
        padding: 1rem;
        margin: 1rem;
        height: 20%;
        @media (max-width: 768px) {
            width: 100%;
            margin: 0.5rem;
            padding: 0.5rem;
        }
    }
    >button {
        width: 10%;
        padding: 0.5rem;
        margin: 0.5rem;
        border: 1px solid #ffffff;
        outline: none;
        background: transparent;
        color: #ffffff;
        :hover {
            transform: scale(1.2);
        }
        @media (max-width: 768px) {
            width: 90%;
        }
    }
}
`;

export const MainContainerThanks = styled.div`
    border: 2px solid #141414;
    height: 100vh;
    margin: 1rem;
    padding: 2rem;
    background-color: #141414;
    display: grid;
    place-items: center;
    @media (max-width: 768px) {
            margin: 0.5rem;
            padding: 0.5rem;
        }
    >p {
        color: #ffffff;
        font-size: x-large;
        letter-spacing: 0.2rem;
        text-align: center;
    }
`;