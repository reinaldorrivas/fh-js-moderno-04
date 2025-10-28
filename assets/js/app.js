/*
 * nC = n of Clubs
 * nD = n of Diamonds
 * nH = n of Hearts
 * nS = n of Spades
 */

let mazoCartas = [];
const cartaTipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "K", "Q"];

const crearMazoCartas = () => {
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

mazoCartas = crearMazoCartas();

const pedirCarta = () => {
  if (!mazoCartas.length) throw "Se acabaron las cartas.";

  return mazoCartas.pop();
};

pedirCarta();

const valorCarta = (carta) => {
  const puntosCarta = carta.substring(0, carta.length - 1);

  return isNaN(puntosCarta) ? (puntosCarta === "A" ? 11 : 10) : puntosCarta * 1;
};

valorCarta(pedirCarta());
