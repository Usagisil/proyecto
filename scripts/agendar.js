
// Constructor
function Padres(nombre, primerApellido, segundoApellido, telefono) {
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.telefono = telefono;
}



//get the inpus from HTML
const inputNombre = document.getElementById("nombreSolicitante");
const inputPrimerApellido = document.getElementById("primerApellidoSolicitante");
const inputSegundoApellido = document.getElementById("segundoApellidoSolicitante");
const inputTelefono = document.getElementById("telefonoSolicitante");
let p;

function agendar() {
    //Crear algún objeto de la clase Padres
    let padre = new Padres(inputNombre.value, inputPrimerApellido.value, inputSegundoApellido.value, inputTelefono.value);
    //desplegar el objeto en la consola
   if(inputNombre.value ==""){
        alert("Favor de llenar el campo de Nombre");
        
   }else{
    //console.log(padre);
    display(padre);
    alert("registro Exitoso");
   }
     //console.log("inputNombre.value, inputPrimerApellido.value, inputSegundoApellido.value, inputTelefono.value");
    // Your code here
}
//Para insertan en pantalla(lo voy a agregar en about )
function display(Padres){
    const list = document.getElementById("list");
    p=`
    <div> 
        <p>${Padres.nombre} - ${Padres.primerApellido}</p>
    </div>
    `;
    list.innerHTML+=p;// inserta en HTML
}

// Objects
let Padres1 = new Padres("Juan", "Perez", "Gomez", 1234567890);
let Padres2 = new Padres("Maria", "Gomez", "Perez", 1234567890);
console( Padres1, Padres2);
