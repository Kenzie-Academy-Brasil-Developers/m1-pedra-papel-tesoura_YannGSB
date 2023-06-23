/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
  return analisaJogada(player1, player2);
}

function analisaJogada(jogada1, jogada2) {
  if (jogada1 === jogada2) {
    return "Empate!";
  } else if (
    (jogada1 === "Papel" && jogada2 === "Pedra") ||
    (jogada1 === "Pedra" && jogada2 === "Tesoura") ||
    (jogada1 === "Tesoura" && jogada2 === "Papel")
  ) {
    return "Jogador 1 venceu!";
  } else{
    return "Jogador 2 venceu!";
  }
}