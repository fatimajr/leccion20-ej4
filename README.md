# leccion20-ej4
# Lección 20 / ejercicio 4
- Desarrollar un script que lea la cantidad de segundos que ingrese el usuario, luego, al dar click en un botón, generar un color random que sea asignado como fondo de la página.
- Nota: Pasar el callback como function statement

# Solución
- Declarar una función con nombre callback y llamarla como parámetro desde el método setInterval.
```Javascript
window.addEventListener("load", function() {
    var boton = document.getElementById("cambiar");
    boton.addEventListener("click", function() {
        var segundos = parseFloat(document.getElementById("seconds").value);
        setInterval(callback, segundos*1000);
	});
});
function callback () {
         document.body.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
}
```

