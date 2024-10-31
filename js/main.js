let diasSemana = [
    { id: 1, nombre: "Lunes" },
    { id: 2, nombre: "Martes" },
    { id: 3, nombre: "Miércoles" },
    { id: 4, nombre: "Jueves" },
    { id: 5, nombre: "Viernes" },
    { id: 6, nombre: "Sábado" },
    { id: 7, nombre: "Domingo" }
];

let turnos = [
    { id: 1, nombre: "Mañana", horario: "6am - 14pm" },
    { id: 2, nombre: "Tarde", horario: "14pm - 22pm" },
    { id: 3, nombre: "Noche", horario: "22pm - 6am" }
];

// Funcion para seleccionar un día de la semana
function seleccionarDia() {
    let diaSeleccionado = null;
    while (!diaSeleccionado) {
        let numeroDia = prompt("Ingresa un número del 1 al 7 para elegir el día de la semana:");
        
        if (!numeroDia || isNaN(numeroDia)) {
            alert("Por favor, ingresa un número válido.");
            continue; // Repete el bucle si la entrada no es valida
        }

        numeroDia = parseInt(numeroDia);
        diaSeleccionado = diasSemana.find(dia => dia.id === numeroDia);
        
        if (!diaSeleccionado) {
            alert("El número ingresado no corresponde a un día de la semana.");
        }
    }

    console.log("El día seleccionado es: " + diaSeleccionado.nombre);
    return diaSeleccionado;
}

// Funcion para elegir un turno
function seleccionarTurno() {
    let turnoSeleccionado = null;
    while (!turnoSeleccionado) {
        let turnoId = prompt("Elige un turno: \n1. Turno Mañana (6am - 14pm)\n2. Turno Tarde (14pm - 22pm)\n3. Turno Noche (22pm - 6am)");
        
        if (!turnoId || isNaN(turnoId)) {
            alert("Por favor, ingresa un número válido.");
            continue; // Repite el bucle si la entrada no es valida
        }

        turnoId = parseInt(turnoId);
        turnoSeleccionado = turnos.find(turno => turno.id === turnoId);
        
        if (!turnoSeleccionado) {
            alert("No seleccionaste un turno válido.");
        }
    }

    console.log("Turno seleccionado: " + turnoSeleccionado.nombre);
    return turnoSeleccionado;
}

// Funcion para mostrar en el html
function mostrarResultado(dia, turno) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Elegiste el día <strong>${dia.nombre}</strong> en el turno <strong>${turno.nombre}</strong> (${turno.horario}).`;
}

let diaSeleccionado = seleccionarDia();
let turnoSeleccionado = seleccionarTurno();
mostrarResultado(diaSeleccionado, turnoSeleccionado);
