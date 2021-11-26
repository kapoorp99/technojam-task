import React from 'react'
import { MainContainer, MobileHeading } from './styles'
import Navbar from '../Navbar/Navbar'
import useWindowDimensions from '../customHooks/useWindowDimensions';
import Sidebar from '../Sidebar/Sidebar';

function Header() {
    const { width } = useWindowDimensions();

    return (
        <MainContainer>
            {width<=768?(<><Sidebar /><MobileHeading>My Portfolio</MobileHeading></>):(<Navbar />)}
        </MainContainer>
    )
}

export default Header
