import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #141414;
    height: 100%;
    margin: 1rem;
    padding: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    >.container__left{
        margin: 1rem;
        flex:0.5;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        >img {
            background-color: #FF7A5C;
            width: 22rem;
            height: 100%;
            margin: 1rem;
            object-fit: contain;
            border-radius: 50%;
            filter: grayscale(100%);
            :hover {
                filter: unset;
            }
            @media (max-width: 768px) {
                width: 12rem;
            }
        }
        >.social_connects {
            display: flex;
            >a {
                height: 100%;
                margin: 1rem;
                >img {
                    
                    filter: grayscale(100%);
                    :hover {
                        filter: unset;
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
    >.container__right {
        width: 100%;
        margin: 1rem;
        flex:0.5;
        >p {
            margin: 1rem;
            font-weight: 500;
            font-size: larger;
            letter-spacing: 0.2rem;
            word-spacing: 0.4rem;
            line-height: 2rem;
        }
    }
`;

export const SkillsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #141414;
    height: 100%;
    margin: 1rem;
    padding: 2rem;
    >.heading {
        >h1 {
            margin: 1rem;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.2rem;
        }
    }
    >.skills {
        >img {
            transform: scale(1.2);
            margin: 1rem;
        }
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;