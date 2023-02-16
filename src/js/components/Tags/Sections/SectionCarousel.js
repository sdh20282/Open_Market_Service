import { sectionStyle } from "../../../styles/components/Sections/SectionCarouselStyle.js";

const SectionCarousel = () => {
    const section = document.createElement('section');
    sectionStyle(section);

    return section;
}

export { SectionCarousel }