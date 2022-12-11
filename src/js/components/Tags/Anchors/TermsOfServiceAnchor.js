import { anchorStyle } from "../../../styles/components/Anchors/PolicyAnchorStyle.js";

const TermsOfServiceAnchor = () => {
    const anchor = document.createElement('a');
    anchorStyle(anchor);
    anchor.setAttribute('href', '/register');
    anchor.textContent = '이용약관';

    return anchor;
}

export { TermsOfServiceAnchor };