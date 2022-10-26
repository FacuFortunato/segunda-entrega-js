class Inscripcion {

    constructor (contenidos,precioMensual,fecha_inicio){

        this.contenidos = contenidos ;
        this.precioMensual = precioMensual ;
        this.fecha_inicio = fecha_inicio ;


    }

    getContenidos (){

        return this.contenidos
    }
}

const CURSOS = {
    1: {contenidos: 'Taller reparación de radiadores', precioMensual: 3000, fecha_inicio: "23/02/2023"},
    2: {contenidos: 'Carrera mecánica', precioMensual: 5000, fecha_inicio: "23/02/2023"},
    3: {contenidos: 'Curso de mecánica automotriz', precioMensual: 3000, fecha_inicio: "23/02/2023"},
    4: {contenidos: 'Curso de inyección electrónica',  precioMensual: 3000, fecha_inicio: "23/02/2023"},
};


