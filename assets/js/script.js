function Consultorio() { // Constructor del consultorio
    this.nombre = ""
    this.paciente = []
}

Consultorio.prototype.setNombreConsultorio = function (nuevoNombreConsultorio) { // Funcion para limitar que el nombre no este vacio
    if (nuevoNombreConsultorio !== '') {
        this.nombre = nuevoNombreConsultorio.toLowerCase()
        this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1)
    } else {
        console.log('Por favor agregar un nombre valido')
    }
}

Consultorio.prototype.getNombreConsultorio = function () { // Funcion para agregar modificar el nombre
    return this.nombre
}

Consultorio.prototype.agregarPaciente = function (paciente) { // Funcion para agregar al constructor consultorio
    this.paciente.push(paciente)
}

Consultorio.prototype.mostrarPaciente = function () { // Funcion para imprimir los nombres de los pacientes
    this.paciente.forEach((paciente) => {
        console.log(`Nombre: ${paciente.nombre} Edad: ${paciente.edad} RUT: ${paciente.rut} Diagnostico: ${paciente.diagnostico}`)
    })
    //return 1
}

Consultorio.prototype.buscarPaciente = function (nombre) { // Funcion para imprimir los nombres de los pacientes
    const nombreBuscado = nombre
    this.paciente.filter(function (paciente) {
        if (paciente.getNombrePaciente() === nombreBuscado) {
            console.log(`Nombre: ${paciente.nombre} Edad: ${paciente.edad} RUT: ${paciente.rut} Diagnostico: ${paciente.diagnostico}`)
        }
    })
}

// ------------------------- ^ CONSTRUCTOR DEL CONSULTORIO Y SUS FUNCIONES ^ -------------------------

function Paciente() { //  Constructor del paciente
    this.nombre = ""
    this.edad = ""
    this.rut = ""
    this.diagnostico = ""
}

Paciente.prototype.setNombrePaciente = function (nuevoNombrePaciente) { // Funcion SET para limitar que el nombre no este vacio
    if (nuevoNombrePaciente !== '') {
        this.nombre = nuevoNombrePaciente.toLowerCase()
        this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1)
    } else {
        console.log('El nombre no puede ser vacio')
        return
    }
}

Paciente.prototype.getNombrePaciente = function () { // Funcion GET para devolver el valor
    return this.nombre
}

Paciente.prototype.setEdad = function (nuevoEdad) { // Funcion SET para verificar que la edad no este vacia y sea numerico
    const regex = RegExp('^[0-9]+$')
    if (regex.test(nuevoEdad)) {
        this.edad = parseInt(nuevoEdad)
    } else {
        console.log('Ingresar una edad valida')
        return
    }
}

Paciente.prototype.getEdad = function () { // Funcion GET para devolver el valor
    return this.edad
}

Paciente.prototype.setRUT = function (nuevoRUT) { // Funcion SET para verificar que el rut no este vacio y sea numerico
    const regex = RegExp('^[0-9]+$')
    if (regex.test(nuevoRUT)) {
        this.rut = parseInt(nuevoRUT)
    } else {
        console.log('Ingresar un RUT valido')
        return
    }
}

Paciente.prototype.getRUT = function () { // Funcion GET para devolver el valor
    return this.rut
}

Paciente.prototype.setDiagnostico = function (nuevoDiagnostico) { // Funcion SET para verificar que el diagnostico no este vacio
    if (nuevoDiagnostico !== "") {
        this.diagnostico = nuevoDiagnostico
    } else {
        console.log('Por favor ingresar el diagnostico')
        return
    }
}

Paciente.prototype.getDiagnostico = function () { // Funcion GET para devolver el valor
    return this.diagnostico
}


// ------------------------- ^ CONSTRUCTOR DEL PACIENTE Y SUS FUNCIONES ^ -------------------------

const p1 = new Paciente()
p1.setNombrePaciente("Pablo")
p1.setEdad(11)
p1.setRUT(444444444)
p1.setDiagnostico("Cancer")

const p2 = new Paciente()
p2.setNombrePaciente("Pedro")
p2.setEdad(18)
p2.setRUT(323423)
p2.setDiagnostico("Gripe")

const p3 = new Paciente()
p3.setNombrePaciente("Juan")
p3.setEdad(38)
p3.setRUT(123)
p3.setDiagnostico("Peste Negra")

const c1 = new Consultorio()
c1.setNombreConsultorio("Aguirre")
c1.agregarPaciente(p1)
c1.agregarPaciente(p2)
c1.agregarPaciente(p3)

// ------------------------- ^ AGREGANDO DATOS UTILIZANDO SET Y FUNCIONES ^ -------------------------
console.log("-------------- Mostrando datos del consultorio 1 (c1) y el paciente 1 (p1) --------------")

console.log("-------------- Mostrando datos --------------")
c1.mostrarPaciente() // Mostrar todos los pacientes

console.log("-------------- Mostrando un paciente --------------")
c1.buscarPaciente("Pablo") // Al abrir el documento pedira un nombre el cual mostrara solo un paciente

console.log("-------------- Mostrando diagnostico --------------")
console.log(p1.getDiagnostico())

console.log("-------------- Mostrando edad --------------")
console.log(p1.getEdad())

console.log("-------------- Mostrando nombre --------------")
console.log(p1.getNombrePaciente())

console.log("-------------- Mostrando paciente --------------")
console.log(p1.getRUT())


// ------------------------- ^ EJEMPLO QUE LAS FUNCIONES DE LOS CONSTRUCTORES FUNCIONEN ^ -------------------------