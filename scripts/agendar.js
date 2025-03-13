
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
    let nuevaCita = new RegistroAgendarCita(
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
    localStorage.setItem("citas", JSON.stringify(citas));
    displayCitas();
    inputNombreSolicitante.value = "";
    inputPrimerApellidoSolicitante.value = "";
    inputSegundoApellidoSolicitante.value = "";
    inputTelefono.value = "";
    inputDiaCita.value = "";
    inputHoraCita.value = "";
    inputNombreInfante.value = "";
    inputPrimerApellidoInfante.value = "";
    inputSegundoApellidoInfante.value = "";
    inputDescripcionCita.value = "";
}

  // Mostrar citas en pantalla
function displayCitas() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    citas.forEach((cita, index) => {
        let citaElement = `
        <div>
            <p>${cita.nombreSolicitante} ${cita.primerApellidoSolicitante} ${cita.segundoApellidoSolicitante} - ${cita.telefonoSolicitante} - ${cita.diaCita} - ${cita.horaCita} - ${cita.nombreInfante} ${cita.primerApellidoInfante} ${cita.segundoApellidoInfante} - ${cita.descripcionCita}</p>
            <button class="btn btn-warning" onclick="deleteCita(${index})">Eliminar</button>
        </div>
        `;
        list.innerHTML += citaElement;
    });
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

/*Para probar el código sin el HTML
let request1=new RegistroAgendarCita("Juan", "Perez", "Gomez", "1234567890", "2021-10-15", "10:00", "Pedro", "Perez", "Gomez", "Consulta de rutina");
let request2=new RegistroAgendarCita("Maria", "Gomez", "Perez", "0987654321", "2021-10-15", "11:00", "Juan", "Gomez", "Perez",  "Consulta de rutina");
display(request1);
display(request2);*/