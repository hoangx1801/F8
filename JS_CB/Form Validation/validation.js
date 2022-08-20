function Validator(options) {

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {

                // Xử lý mỗi khi blur khỏi input
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi nhập input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}

Validator.isRequired = function(selector) {
    return {
        selector,
        test(value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này";
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector,
        test(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Trường này phải là email";
        }
    }
}

Validator.minLength = function(selector, minlength) {
    return {
        selector,
        test(value) {
            return value.length >= minlength ? undefined : `Trường này phải tối thiểu ${minlength} ký tự`;
        }
    }
}