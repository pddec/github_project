import styled,{css} from "styled-components";
import github_bg from './../../assets/Github.svg'

import {shade} from 'polished';

interface FormProps{
    hasError?: boolean;
}

export const Title = styled.h1`
    font-size:46px;
    color:#3A3A3A;
    font-family: 'Roboto', sans-serif;
    margin-top: 80px;
    width: 433px;
`;

export const Repositories = styled.div`
    font-size:46px;
    color:#3A3A3A;
    font-family: 'Roboto', sans-serif;
    margin-top: 80px;
    height: 112px;
    width: 100%;

   

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #3A3A3A;
        margin: auto;
        margin-left: 15px;
        @media screen and (max-width: 425px) {
            height: 45px;
            width: 45px;
        }
    }

    svg.arrow{
            margin-left : auto;
            color:#C9C9D4;
            margin: auto;
            margin-right: 25px;
        }

    section.text{
        margin: auto;
        display: flex;
        flex-direction: column;
        flex:1;
        margin-left: 15px;
        

        p.name{
            color:#3D3D4D;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
        }

        p.repository{
            color:#A8A8B3;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
        }
       
    }

    a{
        display: flex;
        flex-direction: row;
        flex:1;
        text-decoration: none;
        display: flex;
        background: #FFFFFF;
        transition: 2ms;
        padding: 15px;
            
            & + a{
                margin-top: 10px;
            }
            
            &:hover{
                transform: translateX(10px);
            }
    }
`;

export const Error = styled.span`
    color: #C53030;
`

export const Form = styled.form<FormProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 72px;
    margin-top: 40px;
    

    input{
        width: 65%;
        border-radius: 5px 0 0 5px;
        outline: none;
        padding-left: 25px;
        color:#3A3A3A;
        font-family: 'Roboto', sans-serif;
        border:2px solid #FFFFFF;
        border-right: 0;

    ${({hasError}) => hasError && css`
        
        border-color: #C53030;

    `}

        &::placeholder{
            color:#A8A8B3;
        }
    }
    
    button{
        flex: 1;
        background-color: #04D361;
        width: 45%;
        border-radius: 0 5px 5px 0;
        color: #FFFFFF;
        font-size:18px;

        &:hover{
            background-color: ${shade(0.2,'#04D361')};
        }
    }
`;

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