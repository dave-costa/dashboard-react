import styled from "styled-components"

export const Container = styled.header`
    background: var(--blueColor);
`
export const Content = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blueColorLight);
        border: 0;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;
        outline: none;
        &:hover {
            filter: brightness(.9);
            transition: .5s;
        }
       
    }
`