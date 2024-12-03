import { Welcome } from "../welcome/welcome.jsx";
import { Favorite } from "../favorite/favorite.jsx";

export const Content = () =>{
    return(
        <main>
            <div>
            <Welcome textValue="Mikkel" />
            <Welcome textValue="Frederik" />
            <Welcome textValue="Emil" />
            <Favorite/>
            </div>       
        </main>
    )
};