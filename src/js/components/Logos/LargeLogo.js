import { LargeLogoHeader } from '../Tags/Headers/LargeLogoHeader.js';
import { LargeLogoHeading } from '../Tags/Headings/HeadingOne/LargeLogoHeading.js';
import { LogoAnchor } from '../Tags/Anchors/LogoAnchor.js';
import { LogoImage } from '../Tags/Images/LogoImage.js';

const LargeLogo = () => {
    const header = LargeLogoHeader();
    const heading = LargeLogoHeading();
    const anchor = LogoAnchor();
    const image = LogoImage();

    header.appendChild(heading);
    heading.appendChild(anchor);
    anchor.appendChild(image);

    return header;
}

export { LargeLogo };