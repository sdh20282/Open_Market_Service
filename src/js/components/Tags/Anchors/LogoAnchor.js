import { anchorStyle } from "../../../styles/components/Anchors/LogoAnchorStyle.js";

const LogoAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/');
    anchorStyle(anchor);

    return anchor;
}

export { LogoAnchor };