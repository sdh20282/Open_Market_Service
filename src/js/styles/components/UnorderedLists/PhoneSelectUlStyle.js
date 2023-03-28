const ulStyle = (element) => {
    element.style.width = '152px';
    element.style.maxHeight = '150px';
    element.style.overflowY = 'scroll';
    element.style.position = 'absolute';
    element.style.backgroundColor = 'white';
    element.style.padding = '0';
    element.style.margin = '6px 0 0 0';
    element.style.border = '1px solid #C4C4C4';
    element.style.borderRadius = '5px';
    element.style.boxSizing = 'border-box';
    element.style.zIndex = '10';
    element.style.display = 'none';
}

export { ulStyle };