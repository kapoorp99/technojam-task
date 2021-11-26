import React from 'react'
// import Spinner from 'react-spinkit'
import { MainContainer } from './styles'
import { GridLoader } from 'react-spinners'

function Apploader() {
    return (
        <MainContainer>
           {/* <Spinner name="three-bounce" /> */}
           <GridLoader color="#171717" />
        </MainContainer>
    )
}

export default Apploader
