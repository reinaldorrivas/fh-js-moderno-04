/*
 * nC = n of Clubs
 * nD = n of Diamonds
 * nH = n of Hearts
 * nS = n of Spades
 */

const cartaTipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "K", "Q"];

const crearMazoCartas = () => {
  let mazoCartas = [];

  for (let numeroCarta = 2; numeroCarta < 11; numeroCarta++) {
    for (let cartaTipo of cartaTipos) {
      mazoCartas.push(numeroCarta + cartaTipo);
    }
  }

  for (let especial of especiales) {
    for (let cartaTipo of cartaTipos) {
      mazoCartas.push(especial + cartaTipo);
    }
  }

  return _.shuffle(mazoCartas);
};

const mazoCartas = crearMazoCartas();
