import { sectionStyle } from "../../../styles/components/Sections/InputSectionStyle.js";
sectionStyle

const InputSection = () => {
    const section = document.createElement('section');
    sectionStyle(section);

    return section;
}

export { InputSection };