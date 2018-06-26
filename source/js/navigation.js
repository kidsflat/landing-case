(function () {
  var me = {};

  me.IsEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
  }
  me.IsEmail = function(number) {
    var re = /^\d+$/;
    return re.test(number);
}
 me.IsNotEmpty = function(str) {
     return boolean(str);
 }
  
  window.validation = me;
}())