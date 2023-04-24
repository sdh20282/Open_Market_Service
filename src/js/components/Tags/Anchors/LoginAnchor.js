import { anchorStyle } from "../../../styles/components/Anchors/UserAnchorStyle.js";

const LoginAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/login');
    anchorStyle(anchor);

    return anchor;
}

export { LoginAnchor };