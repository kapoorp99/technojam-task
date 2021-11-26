import { DoneOutline, LocationOnOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ImageCredit, MainContainer, ThoughtsContainer, ThoughtsContainer2 } from './styles'


function Home() {
    const history = useHistory()
    return (
        <>
            <MainContainer>
                <h1>Prakhar Kapoor</h1>
                <h2><DoneOutline /> Full Stack Web Developer</h2>
                <h2><DoneOutline /> Passionate Programmer</h2>
                <h2><DoneOutline /> Problem Solver and Logic Builder</h2>
                <span><LocationOnOutlined />India</span>
                <button onClick={() => history.push('/contactme')}>Want Me In Your Team</button>
            </MainContainer>
            <ThoughtsContainer>
                <div className='thoughts__section'>
                    <p>"For me computer means Turing's Machine !"</p>
                </div>
            </ThoughtsContainer>
            <ThoughtsContainer2>
                <div className='thoughts__section'>
                    <p>"For me programming means solving real world problems through computer science!"</p>
                </div>
            </ThoughtsContainer2>
            <ThoughtsContainer>
                <div className='thoughts__section'>
                    <p>"For me wireframe is a site before a site !"</p>
                </div>
            </ThoughtsContainer>
            <ImageCredit className='bg_image_source'>
                Photo by <a href="https://unsplash.com/@donramxn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ramón Salinero</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </ImageCredit>
        </>
    )
}

export default Home
