import { headerStyle } from "../../styles/components/Tags/Header/TopBarHeaderStyle.js";

const TopBarHeader = () => {
    const header = document.createElement('header');
    headerStyle(header);

    return header
}

export { TopBarHeader };