import styled from 'styled-components'



export const MainContainer = styled.div`
    display: inline-block;
    margin: 1rem;
    overflow: hidden;
    width: 400px;
    height: 400px;
    position: relative;
    box-shadow: 10px 10px 15px #aaaaaa;
    :hover {
        box-shadow: 10px 10px 5px #aaaaaa;
        transform: scale(1.02);
        >img {
            height: 60%;
            filter: blur(0);
        }
        >.project__details {
            border-radius: 0;
            transform: skew(0deg,0deg);
            transition-duration: 0.5s;
            >.project__description__container {
                transform: scale(1);
            }
            >.project__link__container {
                display: block;
            }
        }
        }
    >img {
        width: 100%;
        height: 100%;
        position: absolute;
        filter: blur(0.05rem) grayscale(100%);
    }
    >.project__details {
        position: absolute;
        border-radius: 0.5rem;
        background-image: linear-gradient(-2deg,#171717,#141414);
        transform: skew(32deg,-14deg);
        height: 60%;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0.2rem;
        margin-bottom: -5rem;
        color: #ffffff;
        > .project__name__container {
            padding: 0.4rem;
            >h1 {
                font-size: x-large;
            }
        }
        > .project__description__container {
            padding: 0.4rem;
            text-align: center;
            transform: scale(0.8);
            >p {
                word-spacing: 4px;
            }
        }
        > .project__link__container {
            display: none;
            margin-top: 0.8rem;
            >a {
                text-decoration: none;
                color: #ffffff;
                border: 1px solid #ffffff;
                font-weight: bolder;
                padding: 0.5rem;
            }
        }
    }
`;

export const MobileMainContainer = styled.div`
    display: block;
    width: 80%;
    height: 100%;
    margin: 1rem;
    background-color: #141414;
    color: #ffffff;
    box-shadow: 10px 10px 15px #aaaaaa;
    >img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        filter: grayscale(100%);
    }
    >.project__details {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        > .project__name__container {
            >h1 {
                font-size: larger;
            }
        }
        > .project__description__container {
            text-align: center;
            >p {
                word-spacing: 2px;
            }
        }
        > .project__link__container {
            margin: 1.5rem;
            >a {
                text-decoration: none;
                color: #ffffff;
                border: 1px solid #ffffff;
                font-weight: bolder;
                padding: 0.5rem;
            }
        }
    }
`;