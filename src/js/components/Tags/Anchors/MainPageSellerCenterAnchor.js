import { anchorStyle } from "../../../styles/components/Anchors/MainPageSellerCenterAnchorStyle.js";
import { ShoppingBagImage } from "../Images/ShoppingBagImage.js";
import { MainPageSellerCenterAnchorSpan } from "../Spans/MainPageSellerCenterAnchorSpan.js";

const MainPageSellerCenterAnchor = () => {
    const anchor = document.createElement('a');
    anchorStyle(anchor);
    anchor.setAttribute('id', 'sellerCenterBtn');

    const image = ShoppingBagImage();
    const span = MainPageSellerCenterAnchorSpan();

    anchor.appendChild(image);
    anchor.appendChild(span);

    return anchor;
}

export { MainPageSellerCenterAnchor };