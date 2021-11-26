import styled from 'styled-components'
import bgimg1 from '../assets/images/background_images/bgimg1.jpg'

export const MainContainer = styled.div`
@keyframes bounceInRight { 
    0% {
        transform: translateX(0);
    }
    100% { 
        transform: translateX(30%);
    }
  }
  
  
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    >h1,h2,span,button{
        color: #ffffff;
        width: auto;
        margin: 1rem 1rem 1rem 5rem;
        animation: bounceInRight 1000ms reverse both;
    }
    >button {
        border: 1px solid #ffffff;
        padding: 1rem;
        width: 20%;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        font-weight: 700;
    }
    >span {
        display: flex;
        font-weight: bolder;
        font-size: larger;
    }
    >h2 {
        padding-left: 1rem;
    }
    background-image: url(${bgimg1});
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    @media (max-width: 768px) {
        >h1,h2,span,button{
            color: #ffffff;
            width: auto;
            margin: 0.2rem 0.1rem 0.4rem 0.5rem;
        }
        >span {
            display: flex;
            font-weight: bolder;
            font-size: larger;
            margin-bottom: 1rem;
        }
        >button {
            border: 1px solid #ffffff;
            padding: 1rem;
            width: 70%;
            outline: none;
            background-color: transparent;
            cursor: pointer;
        }
        >h2 {
            padding-left: 0.2rem;
        }
    }
`;

export const ImageCredit = styled.span`
    color: #ffffff;
    position: absolute;
    bottom: -60px;
    right: 0;
    margin: 2rem;
    font-size: smaller;
    >a {
        font-style: italic;
        text-decoration: none;
        color: #ffffff;
        font-weight: 900;
        :link{
            color: #ffffff;
        }
    }
`;

export const ThoughtsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid #141414; */
    height: 100vh;
    margin: 1rem;
    padding: 2rem;
    overflow: hidden;
    position: relative;
    /* background-image: url("https://images.unsplash.com/photo-1563118490-a6fbac646b50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"),url("https://images.unsplash.com/photo-1543271082-cf645d49dcc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"); */
    /* background-repeat: no-repeat,no-repeat;
    background-position: right top,bottom left;
    background-size: 20%; */
    background-color: #131313;
    @media (max-width: 768px) {
        height: 90vh;
    }
    >.thoughts__section {
        opacity: 0.9;
        background-image: linear-gradient(#070705,#020202);
        transform: skew(-32deg,45deg);
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 90%;
        display: grid;
        place-items: center;
        >p {
            transform: skew(32deg,-45deg);
            color: #ffffff;
            position: absolute;
            font-size: small;
            font-weight: 300;
            letter-spacing: 0.1rem;
            @media (max-width: 768px) {
                transform: skew(32deg,-45deg) scale(0.6);
                text-align: center;
            }
        }
    }
`;

export const ThoughtsContainer2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid #141414; */
    height: 100vh;
    margin: 1rem;
    padding: 2rem;
    overflow: hidden;
    position: relative;
    /* background-image: url("https://images.unsplash.com/photo-1548281102-ea2f024598b7?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60"),url("https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"); */
    /* background-repeat: no-repeat,no-repeat;
    background-position: top left,bottom right;
    background-size: 20%; */
    background-color: #131313;
    @media (max-width: 768px) {
        height: 90vh;
    }
    >.thoughts__section {
        opacity: 0.9;
        background-image: linear-gradient(#070705,#020202);
        transform: skew(32deg,-45deg);
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 90%;
        display: grid;
        place-items: center;
        >p {
            transform: skew(-32deg,45deg);
            color: #ffffff;
            position: absolute;
            font-size: small;
            font-weight: 300;
            letter-spacing: 0.1rem;
            @media (max-width: 768px) {
                transform: skew(-32deg,45deg) scale(0.6);
                text-align: center;
            }
        }
    }
`;