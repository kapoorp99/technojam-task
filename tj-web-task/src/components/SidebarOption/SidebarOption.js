import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SidebarOption({ Icon, title,routePath }) {
    return (
        <StyledLink  to={`${routePath}`} >
            <SidebarOptionContainer>
                {Icon && <Icon fontSize="small" style={{ padding: 8 }} />}
                {Icon ? (
                    
                        <h4>{title}</h4>
                ) : (
                    <SidebarOptionDefault>
                        <span>#</span>{title}
                    </SidebarOptionDefault>
                )}
            </SidebarOptionContainer>
        </StyledLink>
    )
}

export default SidebarOption

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    > h4 {
        font-size: 35px;
        margin-right: 10px;
        cursor: pointer;

        :hover {
            opacity: 0.8;
        }
    }
`;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    padding-left: 5px;
    cursor: pointer;
    >.MuiSvgIcon-root {
        font-size: 3rem;
        color: #ffffff;;
        cursor: pointer;
    }
`;

const SidebarOptionDefault = styled.h3`
    padding: 10px 0;
    font-weight: 500;
    color: #fae0e4;
`;