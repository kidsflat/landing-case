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

    window.form = me;
}());