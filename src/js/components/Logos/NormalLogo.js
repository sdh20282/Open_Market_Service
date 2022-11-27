import { NormalLogoHeading } from "../Tags/Headings/HeadingOne/NormalLogoHeading.js";
import { LogoAnchor } from "../Tags/Anchors/LogoAnchor.js";
import { LogoImage } from "../Tags/Images/LogoImage.js";

const NormalLogo = () => {
    const heading = NormalLogoHeading();
    const anchor = LogoAnchor();
    const image = LogoImage();

    heading.appendChild(anchor);
    anchor.appendChild(image);

    return heading;
}

export { NormalLogo };