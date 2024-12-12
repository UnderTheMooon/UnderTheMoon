import styled from "styled-components";

export const ReadMoreSectionStyled = styled.section`
    padding: 2rem;
    background: #f1f1f1;
    text-align: center;
    h2 {
        font-size: 2.5vw;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 400;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
    p {
        font-size: 1vw;
        color: #333;
        margin-bottom: 1rem;
        max-width: 50%;
        margin: 0 auto;
        margin-bottom: 5rem;
        text-transform: uppercase;
    }
    button {
        padding: 0.5rem 1rem;
        background: #f1f1f1;
        border: 1px solid black;
        color: #000;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
        background: #000;
        color: #fff;
        }
    }
    `;