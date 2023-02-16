import { SectionCarousel } from "../../components/Tags/Sections/SectionCarousel.js";
import { CarouselHeader } from "../../components/Tags/Headers/CarouselHeader.js";
import { UlCarousel } from "../../components/Tags/UnorderedLists/UlCarousel.js";

const Carousel = () => {
    const section = SectionCarousel();
    const header = CarouselHeader();
    const list = UlCarousel();

    section.appendChild(header);
    section.appendChild(list);

    return section;
}

export default Carousel;