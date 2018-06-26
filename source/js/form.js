(function(){

    var me = {};
    var form = document.querySelector('.form-container');
    var CloseButton = null;

    function OnClose() {
        me.close();
        CloseButton.removeEventListener('click', OnClose);
    }

    me.open = function () {
        form.classList.remove('is-hidden');
        CloseButton = document.querySelector('.form__close-button');
        CloseButton.addEventListener('click', OnClose);
    };

    me.close = function () {
        form.classList.add('is-hidden');
    };

 
   me.isValid = function() {
    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    var emailValue = document.querySelector('[data-email]').value;
    var numberValue = document.querySelector('[data-number]').value;

       if (!me.isAllCompleted(requiredFields)) {
            console.log('Заполните пожалуйста все необходимые поля');
            return false;
        } else if (!Project.validation.isEmail(emailValue)) {
            console.log('Не верный email');
            return false;
        } else if (!Project.validation.isNumber(numberValue)) {
            console.log('Не верный номер');
            return false;
        }

        return true;
    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!Project.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            }
        }

        return result;
    };

    Project.form = me;
 }())