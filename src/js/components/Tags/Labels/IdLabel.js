import { DefaultLabel } from './DefaultLabel.js'

const IdLabel = () => {
    const label = DefaultLabel();
    label.setAttribute('for', 'idInput');
    label.textContent = '아아디 입력';
    
    return label;
}

export { IdLabel };