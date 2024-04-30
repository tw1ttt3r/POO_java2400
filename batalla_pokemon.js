const pokemones = []; // 6 pokemones

// Registro del Entrenador
alert("Bienvenido Entrenador, regisrate para poder participar");

const nombre = prompt("Nombre completo: ");
const medallas = prompt("Numero de medallas: ");
const ciudad = prompt("Ciudad de origen: ");

const nivel = prompt("Nivel [1,2,3]: ");
const batallas = prompt("Número de batallas: ");
const fecha_comienzo = prompt("Fecha de comienzo: ");

// instancia
// const entrenador = new Lider(nombre, medallas, ciudad, nivel, batallas, fecha_comienzo);
const entrenador = new Entrenador(nombre, medallas, ciudad, nivel, batallas, fecha_comienzo);

alert(`Genial ${entrenador.nombre} vamos a registrar a tu equipo`);

const numeroPokemon = prompt("Cuantos pokemons registraras: ");

if (Number(numeroPokemon) <= 6) {
  for (let i = 0; i < Number(numeroPokemon); i++) {
    const nom = prompt("Nombre del pokemon: ");
    const tipo = prompt("Tipo: ");
    const tamano = prompt("Tamaño: ");
    const genero = prompt("Genero");
    const ataque = prompt("Ataque: ");
    const defensa = prompt("Defensa: ");
    const pokemon = new Pokemon(nom, tipo, tamano, genero, ataque, defensa);
    pokemones.push(pokemon);
  }

  entrenador.guardarEquipo(pokemones);

  entrenador.verEquipo()

  entrenador.listarInformacion();

  alert("muchas gracias por su registro")
}
