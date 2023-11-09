import styled from "styled-components";
import github_bg from './../../assets/Github.svg'

//import {shade} from 'polished';

export const RepositoryContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 80px;

    img{
        width: 162px;
        height: 152px;
        background-color:  #3D3D4D;
        border-radius: 100%;
    }

    div.user_repository{
        display: flex;
        flex-direction: row;
       

        section.repo_desc_user{
            display: flex;
            flex:1;
            flex-direction: column;
            margin: auto 0;
            margin-left: 25px;
            
            
            strong.repo_user{
                font-size: 36px;
                font-style: normal;
                font-weight: 700;
                color:#3D3D4D;
                font-family: 'Roboto', sans-serif;
            }

            p.repo_desc{
                color:#6C6C80;
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
            }
        }
    }

    div.data_repository{
        display: flex;
        flex-direction: row;
        margin-top: 25px;
        section.repo_infos{
            strong.repo_numbers{
                font-size: 36px;
                font-style: normal;
                font-weight: 700;
                color:#3D3D4D;
                font-family: 'Roboto', sans-serif;
            }

            p.repo_indicators{
                color:#6C6C80;
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
            }

            & + section{
                margin-left: 95px;
            }

        }
    }
`

export const Cards = styled.div`
    font-size:46px;
    color:#3A3A3A;
    font-family: 'Roboto', sans-serif;
    margin-top: 80px;
    height: 112px;
    
    display:flex;
    flex-direction: column;

    section.cards_container {
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: 100%;
        background-color: #FFFFFF;
        flex:1;
        margin:auto 0;
     
        & + section{
            margin-top: 25px;
        }

        strong.card_issue{
                font-size: 36px;
                font-style: normal;
                font-weight: 700;
                color:#3D3D4D;
                font-family: 'Roboto', sans-serif;
                margin: auto 0;
            }

            p.card_desc{
                color:#6C6C80;
                font-family: 'Roboto', sans-serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                margin: auto 0;
            }
    }
    
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 960px;
    min-height: 45vh;
    margin: 0 auto;
    padding: 40px 20px;
    background: url(${github_bg}) no-repeat 80% top;
    

   img.logo{
        width: 215px;
        height: 32px;
    }

    @media screen and (min-height: 572px) {
        min-height: 85vh;
    }
`;