import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import { MainContainer } from './styles'
import amazon_clone_img from '../../assets/images/project_images/amazon_clone.png'
import slack_clone_img from '../../assets/images/project_images/slack_clone.png'
import corona_stats_tracker_img from '../../assets/images/project_images/corona_stats_tracker.png'
import resume_maker_img from '../../assets/images/project_images/resume_maker.png'
import my_portfolio_img from '../../assets/images/project_images/my_portfolio.png'

function Projects() {
    return (
        <MainContainer>
            <div className='heading'>
                <h1>My Projects</h1>
            </div>
            <div className='projects'>
                <ProjectCard
                    name="React Slack Clone"
                    description="Slack clone build using React JS,Redux JS,Styled Components,Material UI,Firebase,etc."
                    deployed_link="https://slack-clone-df2af.web.app/"
                    project_image={slack_clone_img} />
                <ProjectCard
                    name="React Amazon Clone"
                    description="Amaxon clone build using React JS,React Context API,Styled Components,Material UI,Firebase,etc."
                    deployed_link="https://clone-82cda.web.app/"
                    project_image={amazon_clone_img} />
                <ProjectCard
                    name="Resume Generator"
                    description="An online web application for generating resumes build using HTML,CSS,JS,etc."
                    deployed_link="https://transformdesires.000webhostapp.com/resumeMAKER/"
                    project_image={resume_maker_img} />
                <ProjectCard
                    name="Corona Stats Tracker"
                    description="Corona cases city wise stats tracker build using HTML,CSS,JS,Bootstrap."
                    deployed_link="https://transformdesires.000webhostapp.com/new_corona_tracker/"
                    project_image={corona_stats_tracker_img} />
                <ProjectCard
                    name="My Portfolio"
                    description="Portfolio website created using REACT JS,styled-components,Material UI,etc."
                    deployed_link="https://my-portfolio-1cee0.web.app/"
                    project_image={my_portfolio_img} />
            </div>
        </MainContainer>
    )
}

export default Projects
