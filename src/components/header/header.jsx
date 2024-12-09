import headerBG from '../../assets/HeaderBG.png';
import { HeaderStyled } from './Header.styled';
export const Header = () => {
    return (
        <HeaderStyled>
            
                {/* <img src={headerBG} alt="Header Image" /> */}
                <h1>Under the Moon</h1>
                <div>
                    <h2>HAIRSTYLIST OG FRISØR</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum similique soluta earum sunt, sequi non laborum quam tempora vel aperiam eveniet consequatur, maxime error neque harum inventore natus qui!</p>
                </div>
            
        </HeaderStyled>
    )
};