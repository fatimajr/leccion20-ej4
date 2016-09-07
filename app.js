window.addEventListener("load", function() {
    var boton = document.getElementById("cambiar");
    boton.addEventListener("click", function() {
        var segundos = parseFloat(document.getElementById("seconds").value);
        setInterval(function () {
         document.body.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);;}, segundos*1000);
   });
});