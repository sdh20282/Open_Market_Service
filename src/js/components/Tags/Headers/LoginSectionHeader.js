import { DefaultHeader } from "./DefaultHeader.js";
import { LoginSectionHeading } from "../Headings/HeadingTwo/LoginSectionHeading.js";

const LoginSectionHeader = () => {
    const header = DefaultHeader();
    const heading = LoginSectionHeading();

    header.appendChild(heading);
    
    return header;
}

export { LoginSectionHeader };