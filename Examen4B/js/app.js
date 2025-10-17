const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const edad = document.querySelector(".edad");
const pais = document.querySelector(".pais");

const usuario = document.querySelector(".usuario");

const nombreGuardado = localStorage.getItem('nombre', nombre);
const emailGuardado = localStorage.getItem('email', nombre);
const edadGuardado = localStorage.getItem('edad', nombre);
const paisGuardado = localStorage.getItem('pais', nombre);

if(nombreGuardado!="" && emailGuardado!="" && edadGuardado!="" && paisGuardado!=""){
    usuario.textContent = `Registro usuario: ${nombreGuardado}`
}

btnGuardar.addEventListener("click", ()=>{
    const nombreg = nombre.value;
    const emailg = email.value;
    const edadg = edad.value;
    const paisg = pais.value;

    if(nombreg !="" && emailg !="" && edadg !="" && paisg !=""){
        mensaje.textContent("Campos vacíos.")
    }


});