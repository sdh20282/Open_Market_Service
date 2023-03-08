import { UlCarouselStyle } from "../../../styles/components/UnorderedLists/UlCarouselStyle.js";

const UlCarousel = () => {
    const ul = document.createElement('ul');
    UlCarouselStyle(ul);

    return ul;
}

export { UlCarousel };