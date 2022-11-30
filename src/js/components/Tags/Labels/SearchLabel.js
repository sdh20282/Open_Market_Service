import { IROnlyLabel } from './IROnlyLabel.js'

const SearchLabel = () => {
    const label = IROnlyLabel();
    label.setAttribute('for', 'search');
    label.textContent = '검색어 입력';
    
    return label;
}

export { SearchLabel };