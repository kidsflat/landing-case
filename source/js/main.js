(function () {
    var openformbutton = document.querySelector('.arrow-down');
    if (openformbutton) {

        openformbutton.addEventListener('click', function(e) 
        {
            e.preventDefault();
            form.open();
        })
    }
}());