import React from 'react'
import { MainContainer,MobileMainContainer } from './styles'
import useWindowDimensions from '../../customHooks/useWindowDimensions';

function ProjectCard(props) {
    const { width } = useWindowDimensions();

    return (
        <>
            {width <= 768 ? (
                <MobileMainContainer>
                    <img src={props?.project_image} alt='' />
                    <div className='project__details'>
                        <div className='project__name__container'>
                            <h1>{props?.name}</h1>
                        </div>
                        <div className='project__description__container'>
                            <p>{props?.description}</p>
                        </div>
                        <div className='project__link__container'>
                            <a href={props?.deployed_link}>See it live</a>
                        </div>
                    </div>
                </MobileMainContainer>
            ) : (
                <MainContainer>
                    <img src={props?.project_image} alt='' />
                    <div className='project__details'>
                        <div className='project__name__container'>
                            <h1>{props?.name}</h1>
                        </div>
                        <div className='project__description__container'>
                            <p>{props?.description}</p>
                        </div>
                        <div className='project__link__container'>
                            <a href={props?.deployed_link}>See it live</a>
                        </div>
                    </div>
                </MainContainer>
            )}
        </>
    )
}

export default ProjectCard
