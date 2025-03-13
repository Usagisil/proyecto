// Constructor
function RegistroAgendarCita(nombreSolicitante, primerApellidoSolicitante, segundoApellidoSolicitante, telefonoSolicitante, diaCita, horaCita, nombreInfante, primerApellidoInfante, segundoApellidoInfante, descripcionCita) {
    this.nombreSolicitante = nombreSolicitante;
    this.primerApellidoSolicitante = primerApellidoSolicitante;
    this.segundoApellidoSolicitante = segundoApellidoSolicitante;
    this.telefonoSolicitante = telefonoSolicitante;
    this.diaCita = diaCita;
    this.horaCita = horaCita;   
    this.nombreInfante = nombreInfante;
    this.primerApellidoInfante = primerApellidoInfante; 
    this.segundoApellidoInfante = segundoApellidoInfante;
    this.descripcionCita = descripcionCita;
}

// Obtener los inputs del HTML
const inputNombreSolicitante = document.getElementById("txtNombreSolicitante");
const inputPrimerApellidoSolicitante = document.getElementById("txtPrimerApellidoSolicitante");
const inputSegundoApellidoSolicitante = document.getElementById("txtSegundoApellidoSolicitante");
const inputTelefono = document.getElementById("txtTelefonoSolicitante");
const inputDiaCita = document.getElementById("txtDiaCita");
const inputHoraCita = document.getElementById("txtHoraCita");
const inputNombreInfante = document.getElementById("txtNombreInfante");
const inputPrimerApellidoInfante = document.getElementById("txtPrimerApellidoInfante");
const inputSegundoApellidoInfante = document.getElementById("txtSegundoApellidoInfante");
const inputDescripcionCita = document.getElementById("txtDescripcionCita");

// Obtener citas guardadas o inicializar arreglo vacío
let citas = JSON.parse(localStorage.getItem("citas")) || [];

// Registrar nueva cita
function agendar() {
    if (inputNombreSolicitante.value === "") {
        alert("Favor de llenar el campo de Nombre del Solicitante");
        return;
    }
    const nuevaCita = new RegistroAgendarCita(
        inputNombreSolicitante.value, 
        inputPrimerApellidoSolicitante.value, 
        inputSegundoApellidoSolicitante.value, 
        inputTelefono.value, 
        inputDiaCita.value, 
        inputHoraCita.value, 
        inputNombreInfante.value, 
        inputPrimerApellidoInfante.value, 
        inputSegundoApellidoInfante.value, 
        inputDescripcionCita.value
    );
    citas.push(nuevaCita);
    localStorage.setItem('citas', JSON.stringify(citas));
    window.location.href = 'listaCitas.html';
}

// Mostrar citas en pantalla
function displayCitas() {
    const list = document.getElementById("list");
    if(!list) return;
    list.innerHTML = "";
    citas.forEach((cita, index) => {
        let citaElement = `
        <tr>
            <td>${cita.nombreSolicitante}</td>
            <td>${cita.primerApellidoSolicitante}</td>
            <td>${cita.segundoApellidoSolicitante}</td>
            <td>${cita.telefonoSolicitante}</td>
            <td>${cita.diaCita}</td>
            <td>${cita.horaCita}</td>
            <td>${cita.nombreInfante}</td>
            <td>${cita.primerApellidoInfante}</td>
            <td>${cita.segundoApellidoInfante}</td>
            <td>${cita.descripcionCita}</td>
            <td><button class="btn btn-warning" onclick="deleteCita(${index})">Eliminar</button></td>
        </tr>
        `;
        list.innerHTML += citaElement;
    });
      // Mostrar u ocultar el botón de borrar todas las citas
      if (citas.length > 0) {
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }
}

// Eliminar una cita
function deleteCita(index) {
    citas.splice(index, 1);
    localStorage.setItem("citas", JSON.stringify(citas));
    displayCitas();
}

// Borrar todos los datos del localStorage
function clearStorage() {
    localStorage.removeItem("citas");
    citas = [];
    displayCitas();
}

// Mostrar citas al cargar la página
document.addEventListener("DOMContentLoaded", displayCitas);