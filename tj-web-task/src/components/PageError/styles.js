import styled from 'styled-components'

export const MainContainer = styled.div`
    background: radial-gradient(#000, #111);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #141414;
    height: 100vh;
    margin: 1rem;
    padding: 2rem;
    >h1 {
        color: #ffffff;
        text-align: center;
        animation: quiver .2s linear infinite;
    }
    @keyframes quiver {
        0%, 3%, 5%, 42%, 44%, 100% {
            opacity: 1; transform: scaleY(1);
        }  
        50% {
            opacity: 0.6; transform: scaleY(1.6);
            color: #ff0000;
        }
        43% {
            opacity: 1; transform: scaleX(1.4);
        }
    }
`;