import { containerStyle } from "../../styles/components/TopBars/TopBarLoginStyle.js";
import { NormalLogo } from "../Logos/NormalLogo.js";
import { SearchBar } from '../SearchBar/SearchBar.js'
import { NavBarLogin } from "../NavBars/NavBarLogin.js";

const TopBarLogin = () => {
    const conatiner = document.createElement('header');
    containerStyle(conatiner);

    const logo = NormalLogo();
    const search_form = SearchBar();
    const nav = NavBarLogin();

    conatiner.appendChild(logo);
    conatiner.appendChild(search_form);
    conatiner.appendChild(nav);

    return conatiner;
}

export { TopBarLogin };