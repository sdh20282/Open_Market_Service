import { anchorStyle } from "../../../styles/components/Anchors/UserAnchorStyle.js";
import { UserImage } from "../Images/UserImage.js";

const UserAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('herf', '/');
    anchorStyle(anchor);

    const image = UserImage();

    anchor.appendChild(image);

    return anchor;
}

export { UserAnchor };