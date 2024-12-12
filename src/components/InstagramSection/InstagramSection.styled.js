import styled from "styled-components";

export const InstagramSectionStyled = styled.section` 
    padding: 2rem;
    background-color: #f1f1f1;
    text-align: center;
    
    h2 {
        font-size: 2.5vw;
        color: #333;
        margin-bottom: 1rem;
        font-weight: 400;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }

    div{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
    }
    `
