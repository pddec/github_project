import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }

    body{
        background-color:#F2F2FA;
        -webkit-font-smoothing: antialiased;
    }

    body, input, body{
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
