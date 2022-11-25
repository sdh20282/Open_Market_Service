const selectorDefaultStyle = (element) => {
    element.style.width = '275px';
    element.style.height = '60px';
    element.style.border = '1px solid #C4C4C4';
    element.style.borderBottom = '1px solid white';
    element.style.borderRadius = '10px 10px 0 0';
    element.style.fontSize = '18px';
    element.style.fontWeight = '500';
    element.style.fontFamily = "'Spoqa Han Sans Neo', 'sans-serif'";
    element.style.boxSizing = 'border-box';
    element.style.cursor = 'pointer';
}

const formDefaultStyle = (element) => {
    element.style.padding = '35px';
    element.style.border = '1px solid #C4C4C4';
    element.style.borderRadius = '0 10px 10px 10px';
}

const inputDefaultStyle = (element) => {
    element.style.width = '480px';
    element.style.color = '#767676';
    element.style.fontSize = '16px';
    element.style.fontFamily = "'Spoqa Han Sans Neo', 'sans-serif'";
    element.style.lineHeight = '60px';
    element.style.border = '0';
    element.style.outline = '0';
    element.style.borderBottom = '1px solid #C4C4C4';
    element.style.boxSizing = 'border-box';
}

const buttonDefaultStyle = (element) => {
    element.style.width = '480px';
    element.style.height = '60px';
    element.style.backgroundColor = '#21BF48';
    element.style.border = '0';
    element.style.borderRadius = '5px';
    element.style.fontSize = '18px';
    element.style.fontWeight = '700';
    element.style.color = 'white';
    element.style.cursor = 'pointer';
}

export { selectorDefaultStyle, formDefaultStyle, inputDefaultStyle, buttonDefaultStyle };