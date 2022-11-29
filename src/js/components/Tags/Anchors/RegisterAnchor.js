import { anchorStyle } from "../../../styles/components/Anchors/FindRegisterAnchorStyle.js";

const RegisterAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/');
    anchor.textContent = '회원가입';
    anchorStyle(anchor);

    return anchor;
}

export { RegisterAnchor };