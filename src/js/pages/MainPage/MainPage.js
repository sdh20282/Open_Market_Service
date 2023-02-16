import Header from "./Header.js";
import Carousel from "./Carousel.js";
import { BodyStyle } from "../../styles/pages/Share/BodyStyle.js";

const MainPage = async () => {
    const body = document.body;
    BodyStyle(body);

    const fragment = new DocumentFragment();
    fragment.appendChild(Header());
    fragment.appendChild(Carousel());

    return fragment;
};

export default MainPage;