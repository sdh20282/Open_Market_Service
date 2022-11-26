const containerStyle = (element) => {
    element.style.width = '550px';
    element.style.margin = '0 auto';
    element.style.paddingTop = '105px';
    element.style.paddingBottom = '70px';
}

const normalTitleStyle = (element) => {
    element.style.width = '124px';
    element.style.height = '38px';
    element.style.margin = '0';
}

const largeTitleStyle = (element) => {
    element.style.width = '238px';
    element.style.margin = '0 auto';
}

const linkStyle = (element) => {
    element.style.cursor = 'pointer';
}

const imageStyle = (element) => {
    element.style.width = '100%';
}

export { containerStyle, normalTitleStyle, largeTitleStyle, linkStyle, imageStyle };