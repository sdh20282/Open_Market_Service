const RegisterPageAgreeInput = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'agreeCheck');

    const cssTemplateString = `
        #agreeCheck {
            appearance: none;
            width: 18px;
            height: 16px;
            border: 1px solid rgb(196, 196, 196);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #agreeCheck::before {
            content: "";
            width: 0.65em;
            height: 0.65em;
            transform: scale(0);
            background-color: #21BF48;
            clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        }

        #agreeCheck:checked {
            border: 1px solid #21BF48;
        }

        #agreeCheck:checked::before {
            transform: scale(1);
        }
    `;
    
    const styleTag = document.createElement("style");
    styleTag.innerHTML = cssTemplateString;
    document.head.insertAdjacentElement('beforeend', styleTag);

    return input;
}

export { RegisterPageAgreeInput };