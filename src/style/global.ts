import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background-color: #ffffff;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: touch;
        user-select: none;
        overflow: hidden;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    /* normalize */
    * {
        box-sizing: border-box;
    }

    *::-webkit-media-controls-start-playback-button {
        display: none !important;
        -webkit-appearance: none;
    }

    *::-webkit-scrollbar {
        background-color: transparent;
        width: 0;
    }

    *:-webkit-autofill,
    *:-webkit-autofill:hover,
    *:-webkit-autofill:focus,
    *:-webkit-autofill:active {
    /* if input has one color, and didn't have bg-image use shadow */
        -webkit-box-shadow: 0 0 0 1000px #fff inset;
    }
    html {
        -ms-overflow-style: none;
        -webkit-text-size-adjust:none;
    }

    body,
    html {
        overscroll-behavior-y: none;
    }

    html,body,div,span,applet,object,iframe,
    h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,
    acronym,address,big,cite,code,del,dfn,em,
    img,ins,kbd,q,s,samp,small,strike,strong,
    sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,
    li,fieldset,form,label,legend,table,caption,
    tbody,tfoot,thead,tr,th,td,article,aside,
    canvas,details,embed,figure,figcaption,footer,
    header,hgroup,menu,nav,output,ruby,section,
    summary,time,mark,audio,video,input,button {
        outline: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
    }

    body {
        font-size: 14px;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        font-family: inherit;
        &:focus {
            outline: none;
            border: none;
        }
        -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    }

    input {
        border: none;
        background: none;
        background-color: transparent;
        box-shadow: none;
        &:focus {
            outline: none;
        }
    }
    /* project css */
    body,html{
        font-family: 'Noto Sans KR', sans-serif,'Open Sans', 'Apple SD Gothic Neo', 'Nanum Gothic', '나눔고딕', 'Malgun Gothic',
        '맑은고딕', '돋움', '굴림', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
`;
