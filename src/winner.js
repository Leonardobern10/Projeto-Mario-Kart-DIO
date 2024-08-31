async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
  console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

  if (character1.pontos > character2.pontos)
    console.log(`\n${character1.nome} venceu a corrida! Parabéns! 🏆🏆`);
  else if (character2.pontos > character1.pontos)
    console.log(`\n${character2.nome} venceu a corrida! Parabéns! 🏆🏆`);
  else console.log("\nA corrida terminou em empate!");
}

module.exports = declareWinner;