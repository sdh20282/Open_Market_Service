import { headerStyle } from "../../../styles/components/Headers/LargeLogoHeaderStyle.js";

const LargeLogoHeader = () => {
    const header = document.createElement('header');
    headerStyle(header);

    return header
}

export { LargeLogoHeader };