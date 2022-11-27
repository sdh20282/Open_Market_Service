import { headerStyle } from "../../../styles/components/Headers/TopBarHeaderStyle.js";

const TopBarHeader = () => {
    const header = document.createElement('header');
    headerStyle(header);

    return header
}

export { TopBarHeader };