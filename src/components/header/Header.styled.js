import styled from 'styled-components'
import headerBG from '../../assets/HeaderBG.png';

export const HeaderStyled = styled.header`
position: relative;
width: 100%;
height: 90vh;
background-image: url(${headerBG});
background-size: cover;

h1{
    font-size: 9vw;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    white-space: nowrap;
    font-weight: 400;
}

div{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background: rgba(0,0,0,0.7);
    padding: 2rem 30%;
    color: #fff;
    text-align: center;
    z-index: 1;
    h2{
        color: #fff;
        font-weight: 400;
        font-size: 2.5vw;
        margin-bottom: 10px;
    }
    p{
        font-size: 1vw;
        font-weight: 300
        max-width: 600px; /* Set the maximum width */
        margin: 0 auto; /* Center the paragraph */
    }
}
` 
