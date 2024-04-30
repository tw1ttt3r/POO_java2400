class Entrenador extends Persona {
  
  constructor(nombre, medallas, ciudad, nivel, batallas, fecha_comienzo) {
    super(nombre,medallas, ciudad, batallas, fecha_comienzo);
    this.nivel = nivel;
  }

  elegirPokemon() {}

  retirarPokemon() {}

  rendirse() {}

  verInformacion() {}

  listarInformacion() {
    console.log(`Mi nombre es ${this.nombre}, soy del pueblo ${this.ciudad} y mi primer pokemon es: ${this.equipo[0].nombre}`)
  } 

}