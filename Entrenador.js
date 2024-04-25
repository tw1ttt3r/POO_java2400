class Entrenador extends Persona {
  
  constructor(nombre, medallas, ciudad, nivel, batallas, fecha_comienzo) {
    super(nombre,medallas, ciudad, batallas, fecha_comienzo);
    this.nivel = nivel;
  }

  elegirPokemon() {}

  retirarPokemon() {}

  rendirse() {}

  verInformacion() {}

}