import { TopBarHeader } from "../Tags/Headers/TopBarHeader.js";
import { NormalLogo } from "../Logos/NormalLogo.js";
import { SearchBar } from '../SearchBar/SearchBar.js'
import { NavBarMainPage } from "../NavBars/NavBarMainPage.js";

const TopBar = () => {
    const header = TopBarHeader();
    const logo = NormalLogo();
    const form = SearchBar();
    const nav = NavBarMainPage();
    
    header.appendChild(logo);
    header.appendChild(form);
    header.appendChild(nav);

    return header;
}

export { TopBar };