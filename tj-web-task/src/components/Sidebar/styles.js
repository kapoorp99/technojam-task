import styled from 'styled-components'

export const SidebarUnexpanded = styled.div`
    background-color: transparent;
    >.MuiSvgIcon-root {
        font-size: 3rem;
        color: #ffffff;
        cursor: pointer;
    }
`;

export const SidebarContainer = styled.div`
    top: 0;
    background-color: #171717;
    color: #ffffff;
    position: fixed;
    visibility: ${({ expanded }) => expanded ? 'visible' : 'hidden'} ;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
`;

export const SidebarContainerTop = styled.div`
    border: 1px solid #ffffff;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`
export const SidebarContainerMiddle = styled.div`
    border: 1px solid #ffffff;
    height: 80%;
`
export const SidebarContainerBottom = styled.div`
    border: 1px solid #ffffff;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    >span {
        margin: 0.2rem;
        text-transform: lowercase;
    }
`
