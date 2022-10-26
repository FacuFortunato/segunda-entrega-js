class Alumno {

    constructor (nombre,apellido,nro_alumno){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nro_alumno = nro_alumno;

        this.cursos = [];
    }


    setInscripcionCurso (nueva_inscripcion){

        this.cursos.push (nueva_inscripcion);

    }


}

