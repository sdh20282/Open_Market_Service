import { DescLabel } from "./DescLabel.js";
import { TermsOfServiceAnchor } from "../Anchors/TermsOfServiceAnchor.js";
import { PersonalInfoPolicyAnchor } from "../Anchors/PersonalInfoPolicyAnchor.js";

const RegisterPageAgreeLabel = () => {
    const label = DescLabel();

    label.append('호두샵의 ');
    label.appendChild(TermsOfServiceAnchor());
    label.append(' 및 ');
    label.appendChild(PersonalInfoPolicyAnchor());
    label.append('에 대한 내용을 확인하였고 동의합니다.');
    
    
    // ' 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.';
    
    return label;
}

export { RegisterPageAgreeLabel };