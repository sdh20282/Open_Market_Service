import { anchorStyle } from "../../../styles/components/Anchors/CartAnchorStyle.js";
import { CartImage } from "../Images/CartImage.js";

const CartAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('herf', '/');
    anchorStyle(anchor);

    const image = CartImage();

    anchor.appendChild(image);

    return anchor;
}

export { CartAnchor };