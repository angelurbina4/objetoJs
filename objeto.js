var text = "Este es un texto";
var i = 0;
var arreglo = [3, 4, 5, 5];
var bool = false;

var nombre = "Angel";
var apellido = "Urbina";
var edad = 25;
var hobbies = ["Leer", "Ejercicio", "Pelis"]

var estudiante = {
  nombre : "Angel",
  apellido : "Urbina",
  edad : 25,
  hobbies : ["Leer", "Ejercicio","Ver pelis"],
  infoCompleta : function() {
      console.log(this.nombre);
      console.log(this.apellido);
      console.log(this.hobbies);
  }
}

estudiante.infoCompleta();

