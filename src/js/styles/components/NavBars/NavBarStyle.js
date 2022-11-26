const navStyle = (element) => {
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.marginLeft = 'auto';
}

const cartStyle = (element) => {
    element.style.width = '46px';
    element.style.height = '50px';
    element.style.marginRight = '26px';
    element.style.cursor = 'pointer';
}

const cartImageStyle = (element) => {
    element.style.width = '100%';
}

const loginStyle = (element) => {
    element.style.width = '56px';
    element.style.height = '50px';
    element.style.cursor = 'pointer';
}

const loginImageStyle = (element) => {
    element.style.width = '100%';
}

export { navStyle, cartStyle, cartImageStyle, loginStyle, loginImageStyle };