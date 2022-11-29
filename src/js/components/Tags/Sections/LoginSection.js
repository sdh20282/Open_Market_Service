import { sectionStyle } from "../../../styles/components/Sections/LoginSectionStyle.js";
sectionStyle

const LoginSection = () => {
    const section = document.createElement('section');
    sectionStyle(section);

    return section;
}

export { LoginSection };