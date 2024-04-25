class Persona {

  constructor(nombre, ciudad, batallas, fecha_comienzo) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.batallas = batallas; 
    this.fecha_comienzo = fecha_comienzo;
    this.equipo = [];
  }

  verEquipo() {
    for (let i = 0; i < this.equipo.length;i++) { 
      console.log(this.equipo[i].nombre)
      console.log(this.equipo[i].ataque)
    }
  }

  listarInformacion() {
    console.log(`informacion: ${this.nombre} y mi equipo ${this.equipo}`)
  }

  guardarEquipo(equipo) {
    this.equipo = equipo;
  }

}