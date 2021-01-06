import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    ${reset}

    *{
        box-sizing:border-box;
    }
    body{
        background-color: #F0F4F7;
        font-family: 'Poppins', sans-serif;
    }
    a {
        color:inherit;
        text-decoration: none;
        cursor: pointer;
    }
    input,button{
        background-color: transparent;
        border: none;
        outline:none; 
    }
    h1,h2,h3,h4,h5,h6{
        font-family:'Poppins', sans-serif;
    }
    ol,ul,li{
        list-style: none;
    }
    img{
        display: block;
        width: 100%;
        height:100%;
    }
`;

export default GlobalStyle;
