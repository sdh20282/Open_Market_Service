import { headingStyle } from "../../../../styles/components/Headings/HeadingOne/NormalLogoHeadingStyle.js";

const NormalLogoHeading = () => {
    const headding = document.createElement('h1');
    headingStyle(headding);

    return headding;
}

export { NormalLogoHeading };