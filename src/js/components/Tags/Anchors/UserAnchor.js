import { anchorStyle } from "../../../styles/components/Anchors/UserAnchorStyle.js";

const UserAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/');
    anchorStyle(anchor);

    return anchor;
}

export { UserAnchor };