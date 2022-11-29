import { anchorStyle } from "../../../styles/components/Anchors/FindRegisterAnchorStyle.js";

const FindPasswordAnchor = () => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '/');
    anchor.textContent = '비밀번호 찾기';
    anchorStyle(anchor);

    return anchor;
}

export { FindPasswordAnchor };