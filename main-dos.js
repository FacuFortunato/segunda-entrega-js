//Bienvenida a la plataforma
alert ("Bienvenido al Centro de Formación Profesional Dardo Rocha");


//Solicitar datos para iniciar el simulador
let usuario = prompt ("Registrate ingresando un nombre de usuario");
let apellido = prompt ("Ahora tu apellido !");
let contraseña = prompt ("Ingresá una contraseña numérica");

const alumnoNuevo = new Alumno (usuario,apellido,contraseña);


//Ingreso
if (validarDatos (usuario, apellido, contraseña)){
    alert ("Bienvenido " + usuario + " " + apellido);
    iniciarPlataforma ();
} else{
    alert ("Refrescá la página y volvé a ingresar tus datos");
}


//Validación de los primeros datos ingresados
function validarDatos(usuario,apellido,contraseña){
    if ((contraseña.trim () === "") || (usuario.trim () === "") || (apellido.trim () === "")){
        alert ("Debes ingresar un dato en el campo solicitado");

        return false ;
    }

    if ((contraseña === null) || (usuario === null) || (apellido === null)){
        alert ("Refrescá la página y volvé a ingresar tus datos");

        return false ;
    }
   
    if (isNaN (contraseña)){
        alert ("Recordá que tu contraseña debe ser numérica");

        return false ;
    }else {

        return true ;
    }

}



//Opciones de cursos a inscribirse
let opcion1 = CURSOS [1]; 
let opcion2 =  CURSOS [2];
let opcion3 = CURSOS [3];
let opcion4 =  CURSOS [4];



//Funcionalidad de la plataforma en cuanto a inscripción
function iniciarPlataforma (){

    let finalizarPlataforma = false;

    while (!finalizarPlataforma){
        let nueva_inscripcion = prompt ("Ingresá el código de la comisión a la que te gustaría inscribirte");



        if (nueva_inscripcion){
            alumnoNuevo.setInscripcionCurso (nueva_inscripcion);
            confirm ("Estás seguro que querés inscribirte a :" + "\n"+ CURSOS[nueva_inscripcion].contenidos + "?");




        } else{
            if (nueva_inscripcion === null){
                finalizarPlataforma = true;
            } 
    
            
            if (nueva_inscripcion.trim () === ""){
                alert ("Refrescá la página e ingresá un código");
                return false ;  
            }
    
            if (isNaN (nueva_inscripcion)){
                alert ("Refrescá la página e ingresá un código numérico");
    
                return false ;
            }
        }
    }

    mostrarConfirmacion ();

    //Confirmación final
    mostrarConfirmacion ();{
        alert ("Bienvenido " + nombre + " " + apellido + "a " + "\n" + getContenidos (alumnoNuevo) + "\n" + "pronto te enviaremos más información" );
    }


}


