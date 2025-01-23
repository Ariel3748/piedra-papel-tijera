let puntajeJugador = 0;
let puntajeCompu = 0;

function playGame(eleccionJugador) {
  console.log(eleccionJugador)
  const opciones = [`piedra`, `papel`, `tijera`];
  const eleccionPC = opciones[Math.floor(Math.random() * 3)];
  let resultado = "";

  if (eleccionJugador === eleccionPC) {
    resultado = `Hubo un empate, ambos eligieron ${eleccionJugador}`;
  } else if (
    (eleccionJugador === `piedra` && eleccionPC === `tijera`) ||
    (eleccionJugador === `tijera` && eleccionPC === `papel`) ||
    (eleccionJugador === `papel` && eleccionPC === `piedra`)
  ) {
    resultado = `Enhorabuena elegiste ${eleccionJugador} y la pc ${eleccionPC}`;
    puntajeJugador++
    }
  else{
    resultado = `Perdiste, la pc eligio ${eleccionPC} y vos ${eleccionJugador}`
    puntajeCompu++
  }

  document.querySelector("#resultado").textContent = resultado;
  document.querySelector("#puntuacion").textContent = `Puntuacion usuario:${puntajeJugador} || Puntuacion maquina:${puntajeCompu}`

  if((puntajeCompu === 3) || (puntajeJugador === 3)){
    finDelJuego()
  }
}



function finDelJuego(){
    const puntajeFinal = puntajeJugador === 3 ? `Felicidades, ganaste` : `Lastima, te gano la compu`;
    setTimeout(()=>{document.querySelector("#resultado").textContent = puntajeFinal},2000)
    document.querySelector("#piedra").disabled = true;
    document.querySelector("#papel").disabled = true;
    document.querySelector("#tijera").disabled = true;
}


const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");

piedra.addEventListener(`click`, () =>{playGame(`piedra`)});
papel.addEventListener(`click`, () =>{playGame(`papel`)});
tijera.addEventListener(`click`, () =>{playGame(`tijera`)});
