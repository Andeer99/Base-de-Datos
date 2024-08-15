class Alumnos {
    constructor() {
        this.alumno = [];
        this.clase = [];
    }

    botonDarDeAlta(nombre, apellidos, edad) {
        let nuevoAlumno = {nombre, apellidos, edad};  
        this.alumno.push(nuevoAlumno);
        console.log(nuevoAlumno);
        return nuevoAlumno;
    }
}

const gestionAlumnos = new Alumnos();

function botonDarDeAlta() { //la funcion unicamente cumple con guardar los datos del tablero, la clase alumno lo convierte en un objeto
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;
    gestionAlumnos.botonDarDeAlta(nombre, apellidos, edad);
}
