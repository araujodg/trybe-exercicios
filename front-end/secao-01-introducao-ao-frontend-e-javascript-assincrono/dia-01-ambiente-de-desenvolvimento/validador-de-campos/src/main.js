import validator from 'validator';
import './style.css';

const inputEl = document.querySelector('#toValidate');
const validationTypeEl = document.querySelector('#validationType');
const validateBtn = document.querySelector('button');

function validate(type, input) {
    switch (type) {
        case 'isAlphanumeric':
            return validator.isAlphanumeric(input);
        case 'isEmail':
            return validator.isEmail(input);
        case 'isInterger':
            return validator.isInt(input);
        case 'isDate':
            return validator.isDate(input, {
                format: 'DD/MM/YYYY'
            });
        case 'isAlpha':
            return validator.isAlpha(input);    
        default:
            break;
    }
}

inputEl.addEventListener('input', () => {
    validateBtn.addEventListener('click', (event) => {
        let userInput = inputEl.value;
        const validationType = validationTypeEl.value;
        if (validate(validationType, userInput) === true) {
            document.querySelector('.valid').classList.remove('not-display');
            setTimeout(() => {
                document.querySelector('.valid').classList.add('not-display');
            }, 2500)
        } else {
            document.querySelector('.not-valid').classList.remove('not-display');
            setTimeout(() => {
                document.querySelector('.not-valid').classList.add('not-display');
            }, 2500)
        }
        event.preventDefault();
    })
})