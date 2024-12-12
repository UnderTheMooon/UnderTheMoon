import styled from "styled-components";
import bookTimeBGLeft from '../../assets/BookTidVenstre.png';
import bookTimeBGRight from '../../assets/BookTidHøjre.png';

export const BookTimeSectionStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem;

    div:first-of-type{
        background-image: url(${bookTimeBGLeft});
    }

    div:last-of-type{
        background-image: url(${bookTimeBGRight});
    }

    div {
        height: 50vh;
        background-size: cover;
        background-position: center;
        text-align: center;
        padding: 2rem;
    }

    h2 {
        font-size: 2.5vw;
        color: #fff;
        margin-bottom: 1rem;
        font-weight: 400;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }
    p {
        font-size: 1vw;
        color: #fff;
        margin-bottom: 1rem;
        max-width: 70%;
        margin: 0 auto;
        margin-bottom: 5rem;
        text-transform: uppercase;
    }

    button {
        padding: 0.5rem 1rem;
        background: #181818;
        border: 1px solid #fff;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
        background: #fff;
        color: #000;
        }
    }
    `