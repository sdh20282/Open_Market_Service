import { DefaultHeader } from "./DefaultHeader.js";
import { InputSectionHeading } from "../Headings/HeadingTwo/InputSectionHeading.js";

const InputSectionHeader = () => {
    const header = DefaultHeader();
    const heading = InputSectionHeading();

    header.appendChild(heading);
    
    return header;
}

export { InputSectionHeader };