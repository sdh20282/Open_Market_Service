import { anchorStyle } from "../../../styles/components/Anchors/CartAnchorStyle.js";

const CartAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/');
    anchorStyle(anchor);

    return anchor;
}

export { CartAnchor };