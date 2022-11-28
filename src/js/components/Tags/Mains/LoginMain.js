import { mainStyle } from "../../../styles/components/Mains/LoginMainStyle.js";

const LoginMain = () => {
    const main = document.createElement('main');
    mainStyle(main);

    return main;
}

export { LoginMain };