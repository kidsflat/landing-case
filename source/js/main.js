(function () {
    var openformbutton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            Project.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (Project.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }

        })
    }

}());