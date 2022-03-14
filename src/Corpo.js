import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo(params) {

    return(
        <div class='corpo'>
            <div class="esquerda">
                <Stories/>    
                <Posts/>
            </div>
                <SideBar user='catanacomics' name='Catana' copyright='© 2021 INSTAGRAM DO FACEBOOK' links='  Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma'/>
        </div>
    )
}