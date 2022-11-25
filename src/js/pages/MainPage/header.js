// import TopBarLogin from '../../components/TopBar/TopBarLogin.js'

import { TopBarLogin } from '../../components/TopBar/TopBarLogin.js'

const Header = () => {
    const header = document.createElement('header');
    TopBarLogin(header);

    return header;
}


export default Header;