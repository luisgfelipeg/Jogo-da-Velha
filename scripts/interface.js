// Listener que executa quando o site for carregado
document.addEventListener("DOMContentLoaded", () => {
  // varre todos os squares
  let squares = document.querySelectorAll(".square");
  //   Em cada square executa o handleClick na classe
  //    correspondente
  squares.forEach(square => {
    square.addEventListener("click", handleClick);
  });
});
// Gera a posição do square clicado no tabuleiro e executa
//  o handleMove, soma o placar ao e diz quem foi o vencedor e executa updateSquares
function handleClick(event) {
  if (playerTime == "") {
    alert("Escolha um Player");
  } else if (gameOver == true) {
    alert("Reinicie o Game para Jogar de novo");
  } else {
    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {
      setTimeout(() => {
        alert(
          "O Jogo Acabou - O Vencedor foi o Player " +
            (playerTime + 1) +
            ": " +
            symbols[playerTime].toUpperCase()
        );
        if (playerTime == 0) {
          player1 += 1;
          document.getElementById("iner").innerHTML = player1;
        } else {
          player2 += 1;
          document.getElementById("inner").innerHTML = player2;
        }
      }, 10);
    }
    updateSquares(position);
  }
}

// Insere o HTML no square que foi clicado, adicionando o
// simbolo do jogador no tabuleiro
function updateSquares(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

// Restarta o Game
function restartGame() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    let position = square.id;
    let symbol = board[position];
    playerTime = "";
    if (symbol != "") {
      square.innerHTML = "";
    }
  });
  gameOver = false;
  board.splice(0, 9, "", "", "", "", "", "", "", "", "");
}
