import { anchorStyle } from "../../../styles/components/Anchors/PolicyAnchorStyle.js";

const PersonalInfoPolicyAnchor = () => {
    const anchor = document.createElement('a');
    anchorStyle(anchor);
    anchor.setAttribute('href', '/register');
    anchor.textContent = '개인정보처리방침';

    return anchor;
}

export { PersonalInfoPolicyAnchor };