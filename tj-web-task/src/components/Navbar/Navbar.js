import React from 'react'
import { MainContainer, StyledNavLink } from './styles'

function Navbar() {
    return (
        <MainContainer>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/projects">Showcase</StyledNavLink>
            <StyledNavLink to="/aboutme">About Me</StyledNavLink>
            <StyledNavLink to="/contactme">Contact Me</StyledNavLink>
        </MainContainer>
    )
}

export default Navbar
