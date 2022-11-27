import { TopBarHeader } from "../Tags/Header/TopBarHeader.js";
import { NormalLogo } from "../Logos/NormalLogo.js";
import { SearchBar } from '../SearchBar/SearchBar.js'
import { NavBarLogin } from "../NavBars/NavBarLogin.js";

const TopBarLogin = () => {
    const conatiner = TopBarHeader();
    const logo = NormalLogo();
    const search_form = SearchBar();
    const nav = NavBarLogin();
    
    conatiner.appendChild(logo);
    conatiner.appendChild(search_form);
    conatiner.appendChild(nav);

    return conatiner;
}

export { TopBarLogin };