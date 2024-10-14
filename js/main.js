alert("¡Bienvenid@s! Selecciona un día de la semana y un turno.");

// Solicitamos un número al usuario del 1 al 7 para el día de la semana
let numeroDia = parseInt(prompt("Ingresa un número del 1 al 7 para elegir el día de la semana:"));
console.log("El número ingresado es: " + numeroDia);

// Definimos los días de la semana
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Verificamos si el número es válido (entre 1 y 7)
if (numeroDia >= 1 && numeroDia <= 7) {
    let diaSeleccionado = diasSemana[numeroDia - 1]; // Restamos 1 porque el array empieza en 0
    console.log("El día seleccionado es: " + diaSeleccionado);
    
    // Pedimos al usuario que elija un turno
    let turno = prompt("Elige un turno: \n1. Turno Mañana (6am - 14pm)\n2. Turno Tarde (14pm - 22pm)\n3. Turno Noche (22pm - 6am)");
    console.log("Turno seleccionado: " + turno);

    // Mostramos el turno seleccionado
    if (turno == "1") {
        alert("Elegiste el día " + diaSeleccionado + " en el turno Mañana (6am - 14pm).");
    } else if (turno == "2") {
        alert("Elegiste el día " + diaSeleccionado + " en el turno Tarde (14pm - 22pm).");
    } else if (turno == "3") {
        alert("Elegiste el día " + diaSeleccionado + " en el turno Noche (22pm - 6am).");
    } else {
        alert("No seleccionaste un turno válido.");
    }
} else {
    alert("El número ingresado no corresponde a un día de la semana.");
}
