// cargar variables generales
const datosSolicitadosMascota = [ "Nombre", "Raza", "Familia", "Vacunas", "Edad", "Actividades", "Comida", "Vete"];
let htmlEstructura = "";
let htmlMostrar = "";
datosSolicitadosMascota.forEach(element => htmlEstructura = htmlEstructura + '<p><label> '+element+':</label><input id= "'+element+'" ></p>');
htmlEstructura = htmlEstructura + '<button id="boton" type="button" class="btn btn-primary">Mostrar Datos</button>';

// asignar variables a nodos del DOM
document.getElementById("contenedor").innerHTML = htmlEstructura;
document.getElementById("titulo").innerHTML = "Ingresa los datos de tu mascota: ";

// trabajar con clases y objetos
class Animal{
    constructor(args){
        this.nombre = args[0];
        this.raza = args[1];
        this.familia = args[2];
        this.vacunas = args[3];
        this.edad = args[4];
        this.actividades = args[5];
        this.comida = args[6];
        this.visitaVete = args[7];
    }
}

// mostrar en div despues de presionar el boton MOSTRAR
document.getElementById("boton").addEventListener("click", ()=>{
    const arrayMascota =[];
    datosSolicitadosMascota.forEach( (detalle, index) => {
                console.log(document.getElementById(detalle).value);
                arrayMascota[index] = document.getElementById(detalle).value;
                }
            )
    
    const mascota = new Animal(arrayMascota);
    Object.entries(mascota).forEach( (dato) => {
            document.getElementById("respuesta").innerHTML +=  ` <p> ${dato[0]} => ${dato[1]} </p>` ;
        });
});


