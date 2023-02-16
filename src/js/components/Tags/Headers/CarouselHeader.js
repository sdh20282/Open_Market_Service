import { DefaultHeader } from "./DefaultHeader.js";
import { CarouselHeading } from "../Headings/HeadingTwo/CarouselHeading.js";

const CarouselHeader = () => {
    const header = DefaultHeader();
    const heading = CarouselHeading();

    header.appendChild(heading);

    return header;
}

export { CarouselHeader }