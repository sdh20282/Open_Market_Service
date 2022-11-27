import { headingStyle } from "../../../../styles/components/Headings/HeadingOne/LargeLogoHeadingStyle.js";

const LargeLogoHeading = () => {
    const headding = document.createElement('h1');
    headingStyle(headding);

    return headding;
}

export { LargeLogoHeading };