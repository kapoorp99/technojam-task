import React from 'react'
import PrakharKapoorImage from '../../assets/images/developer_images/prakhar.png'
import { MainContainer, SkillsSection } from './styles'
import github_social_icon from '../../assets/icons/social/github.png'
import instagram_social_icon from '../../assets/icons/social/instagram.png'
import linkedin_social_icon from '../../assets/icons/social/linkedin.png'

//skills icons
import cpp_skill_icon from '../../assets/icons/skills/cpp.png'
import css_skill_icon from '../../assets/icons/skills/css.png'
import express_skill_icon from '../../assets/icons/skills/express.png'
import firebase_skill_icon from '../../assets/icons/skills/firebase.png'
import github_skill_icon from '../../assets/icons/skills/github.png'
import heroku_skill_icon from '../../assets/icons/skills/heroku.png'
import html_skill_icon from '../../assets/icons/skills/html.png'
import js_skill_icon from '../../assets/icons/skills/js.png'
import mongodb_skill_icon from '../../assets/icons/skills/mongodb.png'
import postman_skill_icon from '../../assets/icons/skills/postman.png'
import react_skill_icon from '../../assets/icons/skills/react.png'
import redux_skill_icon from '../../assets/icons/skills/redux.png'


function AboutMe() {
    return (
        <>
            <MainContainer>
                <div className='container__left'>
                    <img src={PrakharKapoorImage} alt="Prakhar Kapoor" />
                    <div className="social_connects">
                        <a href="https://www.github.com/kapoorp99"><img src={github_social_icon} alt="social links" loading="lazy" /></a>
                        <a href="https://www.linkedin.com/in/kp99"><img src={linkedin_social_icon} alt="social links" loading="lazy" /></a>
                        <a href="https://www.instagram.com/kapoorprakhar99/"><img src={instagram_social_icon} alt="social links" loading="lazy" /></a>
                    </div>
                </div>
                <div className='container__right'>
                    <p>
                        Hi! I am Prakhar Kapoor, a web developer engaged in the development of World Wide Web Applications.
                        Doing stuff with computers and technology have been my passion since childhood.
                        I enjoy developing beautiful and functional websites.
                    </p>
                </div>
            </MainContainer>
            <SkillsSection>
                <div className='heading'>
                    <h1>Skillset</h1>
                </div>
                <div className='skills'>
                    <img src={cpp_skill_icon} alt="skills" />
                    <img src={css_skill_icon} alt="skills" />
                    <img src={express_skill_icon} alt="skills" />
                    <img src={firebase_skill_icon} alt="skills" />
                    <img src={github_skill_icon} alt="skills" />
                    <img src={heroku_skill_icon} alt="skills" />
                    <img src={html_skill_icon} alt="skills" />
                    <img src={js_skill_icon} alt="skills" />
                    <img src={mongodb_skill_icon} alt="skills" />
                    <img src={postman_skill_icon} alt="skills" />
                    <img src={react_skill_icon} alt="skills" />
                    <img src={redux_skill_icon} alt="skills" />
                </div>
            </SkillsSection>
        </>
    )
}

export default AboutMe
