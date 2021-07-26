import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --colorBack: #f0f2f5;
        --redColor: #E52E4D;
        --blueColor: #5429CC;
        --green: #33CC95;
        --blueColorLight: #6963FF;
        --textTitle: #363F5F;
        --textBody: #969CB3;
        --back: #F0F2F5;
        --shape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (min-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: var(--colorBack);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;

    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .overlay-modal {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content-modal{
        width: 100%;
        max-width: 576px;
        background: var(--back);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    .modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: .3s;
        &:hover{
            filter: brightness(0.9);
        }
    }

`