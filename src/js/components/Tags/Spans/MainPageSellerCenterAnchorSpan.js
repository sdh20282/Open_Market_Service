import { spanStyle } from "../../../styles/components/Spans/MainPageSellerCenterAnchorSpanStyle.js";

const MainPageSellerCenterAnchorSpan = () => {
    const span = document.createElement('span');
    spanStyle(span);
    span.textContent = '판매자 센터';

    return span;
}

export { MainPageSellerCenterAnchorSpan };