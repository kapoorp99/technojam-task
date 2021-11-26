import styled from 'styled-components'

export const MainContainer = styled.div`
`;

export const FooterTop = styled.div``;

export const FooterBottom = styled.div`
    background-color: #141414;
    color: #ffffff;
    display: flex;
    padding: 1rem;
    justify-content: center;
    >div {
        display: flex;
        flex-direction: column;
        >span {
            display: flex;
            justify-content: center;
            font-size: large;
        }
    }
`;