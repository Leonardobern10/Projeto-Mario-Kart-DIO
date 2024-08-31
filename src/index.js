const playRaceEngine = require("./engine.js");
const declareWinner = require("./winner.js");

const players = require("./Player.js");

const player1 = choseCharacter(players);
const player2 = choseCharacter(players);

function choseCharacter(array) {
  let numberSelected = Math.floor(Math.random() * (array.length - 1));
  return array.splice(numberSelected, 1);
}


(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1[0].nome} e ${player2[0].nome} começando...\n`);
  await playRaceEngine(player1[0], player2[0]);
  await declareWinner(player1[0], player2[0]);
})();
