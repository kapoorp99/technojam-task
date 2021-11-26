import { Copyright } from '@material-ui/icons'
import React from 'react'
import { FooterBottom, MainContainer } from './styles'

function Footer() {
    return (
        <MainContainer>
            {/* <FooterTop></FooterTop> */}
            <FooterBottom>
                <div>
                    <span><Copyright /> 2021</span>
                    <span>Designed candidly by Prakhar Kapoor</span>
                    <span>ALL RIGHTS RESERVED</span>
                </div>
            </FooterBottom>
        </MainContainer>
    )
}

export default Footer
