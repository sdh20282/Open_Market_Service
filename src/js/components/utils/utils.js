const IROnly = (element) => {
    element.style.position = 'absolute';
    element.style.clip = 'rect(0 0 0 0)';
    element.style.clipPath = 'inset(50%)';
    element.style.width = '1px';
    element.style.height = '1px';
    element.style.margin = '-1px';
    element.style.overflow = 'hidden';
}

export { IROnly };