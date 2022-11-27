import { TopBarHeader } from "../Tags/Headers/TopBarHeader.js";
import { NormalLogo } from "../Logos/NormalLogo.js";
import { SearchBar } from '../SearchBar/SearchBar.js'
import { NavBarLogin } from "../NavBars/NavBarLogin.js";

const TopBarLogin = () => {
    const header = TopBarHeader();
    const logo = NormalLogo();
    const form = SearchBar();
    const nav = NavBarLogin();
    
    header.appendChild(logo);
    header.appendChild(form);
    header.appendChild(nav);

    return header;
}

export { TopBarLogin };