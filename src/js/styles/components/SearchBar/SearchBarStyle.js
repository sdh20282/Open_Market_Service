const formStyle = (element) => {
    element.style.width = '400px';
    element.style.height = '46px';
    element.style.display = 'flex';
    element.style.marginLeft = '30px';
    element.style.padding = '0 22px';
    element.style.border = '2px solid #21BF48';
    element.style.borderRadius = '50px';
    element.style.boxSizing = 'border-box';
}

const inputStyle = (element) => {
    element.style.flexGrow = '1'
    element.style.border = '0'
    element.style.outline = '0'
}

const buttonStyle = (element) => {
    element.style.padding = '0';
    element.style.border = '0';
    element.style.backgroundColor = 'inherit';
    element.style.marginLeft = '10px';
    element.style.cursor = 'pointer';
}

const imageStyle = (element) => {
    element.style.width = '28px';
}

export { formStyle, inputStyle, buttonStyle, imageStyle };