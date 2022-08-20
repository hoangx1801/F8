function Validator(formSelector) {
    var _this = this;
    var formRules = {};
    
    function getParent(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var validatorRules = {
        required: function(value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này";
        },
        email: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "Vui lòng nhập email";
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiếu ${min} ký tự`;
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
            }
        }
    }
    //Lấy form theo Dom
    var formElement = document.querySelector(formSelector);
    //Chỉ xử lý trong element Dom
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                var ruleFunction = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunction = ruleFunction(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunction);
                } else {
                    formRules[input.name] = [ruleFunction];
                }
            }

            //Lắng nghe event
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        function handleValidate(e) {
            var rules = formRules[e.target.name];
            var errorMessage;
            
            for (var rule of rules) {
                errorMessage = rule(e.target.value);
                if (errorMessage) break;
            }
            // rules.some(function(rule) {
            //     errorMessage = rule(e.target.value);
            //     return errorMessage;
            // })
            if (errorMessage) {
                var formGroup = getParent(e.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage;
        }

        function handleClearError(e) {
            var formGroup = getParent(e.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }

    //Xử lý hành vi submit
    formElement.onsubmit = function(e) {
        e.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }
        //submit khi không có lỗi
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce(function(values, input) {
                    switch(input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.value + '"]:checked');
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')) return values;

                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            } else {
                                values[input.name].push();
                            }
                            break;
                        case 'file':
                            values[input.name] = input.file;
                            break;
                        default:
                            values[input.name] = input.value;
                    }
                    return values;
                }, {});

                _this.onSubmit(formValues);
            } else {
                formElement.submit();
            }
        }
    }
}