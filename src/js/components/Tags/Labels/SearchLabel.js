import { DefaultLabel } from './DefaultLabel.js'

const SearchLabel = () => {
    const label = DefaultLabel();
    label.setAttribute('for', 'search');
    label.textContent = '검색어 입력';
    
    return label
}

export { SearchLabel };