
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
  // this.edadInfanteAnios = edadInfanteAnios;
  //  this.edadInfanteMeses = edadInfanteMeses;
    
    
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
//const inputEdadInfanteAnios = document.getElementById("txtEdadInfanteAnios");
//const inputEdadInfanteMeses = document.getElementById("txtEdadInfanteMeses");
const inputDescripcionCita = document.getElementById("dtxtDescripcionCita");


function agendar() {
    // Crear un objeto de la clase RegistroAgendarCita
    let datosRegistroCita = new RegistroAgendarCita(
        inputNombreSolicitante.value, 
        inputPrimerApellidoSolicitante.value, 
        inputSegundoApellidoSolicitante.value, 
        inputTelefono.value, 
        inputDiaCita.value, 
        inputHoraCita.value, 
        inputNombreInfante.value, 
        inputPrimerApellidoInfante.value, 
        inputSegundoApellidoInfante.value, 
       //inputEdadInfanteAnios.value, 
      // inputEdadInfanteMeses.value, 
      // inputDescripcionCita.value
    );
    // Validar los campos
    if (inputNombreSolicitante.value == "") {
        alert("Favor de llenar el campo de Nombre del Solicitante");
    } else if (inputPrimerApellidoSolicitante.value == "") {
        alert("Favor de llenar el campo de Primer Apellido del Solicitante");
    } else if(inputSegundoApellidoSolicitante.value == "") {
        alert("Favor de llenar el campo de Segundo Apellido del Solicitante");
    } else if(inputTelefono.value == "") {
        alert("Favor de llenar el campo del teléfono");  
    } else if(inputDiaCita.value == "") {
        alert("Favor de llenar el campo del día de la cita"); 
    } else if(inputHoraCita.value == "") {
        alert("Favor de llenar el campo del día de la cita");  
    } else if(inputNombreInfante.value == "") {
        alert("Favor de llenar el campo del Nombre del Infante"); 
    } else if(inputPrimerApellidoInfante.value == "") {
        alert("Favor de llenar el campo del Primer Apellido del Infante");  
    } else if(inputSegundoApellidoInfante.value == "") {
        alert("Favor de llenar el campo del Segundo Apellido del Infante"); 
     
    }else{
        console.log(datosRegistroCita);
        display(datosRegistroCita);
    }
   /* 
    if (inputPrimerApellidoInfante.value == "") {
        alert("Favor de llenar el campo de Primer Apellido del Infante");
        return;
    }
    if (inputSegundoApellidoInfante.value == "") {
        alert("Favor de llenar el campo de Segundo Apellido del Infante");
        return;
    }
    if (inputEdadInfanteAños.value == "") {
        alert("Favor de llenar el campo de Edad del Infante (Años)");
        return;
    }
    if (inputEdadInfanteMeses.value == "") {
        alert("Favor de llenar el campo de Edad del Infante (Meses)");
        return;
    }
    if (inputDescripcionCita.value == "") {
        alert("Favor de llenar el campo de Descripción de la Cita");
        return;*/
    

    
}
function display(datosRegistroCita) {
    const list=document.getElementById("list");
    const p=`
    <table class="table table-bordered">
    <thead>
        <tr>
            <th>Nombre del Solicitante</th>
            <th>Primer Apellido del Solicitante</th>
            <th>Segundo Apellido del Solicitante</th>
            <th>Teléfono</th>
            <th>Día de la Cita</th>
            <th>Hora de la Cita</th>
            <th>Nombre del Infante</th>
            <th>Primer Apellido del Infante</th>
            <th>Segundo Apellido del Infante</th>
           
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${datosRegistroCita.nombreSolicitante}</td>
            <td>${datosRegistroCita.primerApellidoSolicitante}</td>
            <td>${datosRegistroCita.segundoApellidoSolicitante}</td>
            <td>${datosRegistroCita.telefonoSolicitante}</td>
            <td>${datosRegistroCita.diaCita}</td>
            <td>${datosRegistroCita.horaCita}</td>
            <td>${datosRegistroCita.nombreInfante}</td>
            <td>${datosRegistroCita.primerApellidoInfante}</td>
            <td>${datosRegistroCita.segundoApellidoInfante}</td>
           
        </tr>
    </tbody>
    </table>
    

    <p>Nombre del Solicitante: ${datosRegistroCita.nombreSolicitante}</p>
    `;
    list.innerHTML+=p;    

}
let request1=new RegistroAgendarCita("Juan", "Perez", "Gomez", "1234567890", "2021-10-15", "10:00", "Pedro", "Perez", "Gomez", "Consulta de rutina");
let request2=new RegistroAgendarCita("Maria", "Gomez", "Perez", "0987654321", "2021-10-15", "11:00", "Juan", "Gomez", "Perez",  "Consulta de rutina");
display(request1);
display(request2);