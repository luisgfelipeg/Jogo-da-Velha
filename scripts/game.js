let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = "";
let gameOver = false;
let player1 = 0;
let player2 = 0;

let symbols = ["o", "x"];
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// pega a posição do click e coloca o simbolo do jogador da vez
//  no tabuleiro na posição correspondente, verifica se alguem
// ganhou, chamando a função isWin e para o jogo
function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if (gameOver == false) {
      playerTime = playerTime == "0" ? 1 : "0";
    }
  }
  return gameOver;
}
// Verifica se de todas as possibilidades, alguem ganhou e
// retorna verdadeiro para o gameOver
function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];
    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}

// Retorna quem vai jogar Primeiro, X ou O
function firstO() {
  if (gameOver == true) {
    alert("Reinicie o Game");
  } else if (playerTime != "0") {
    playerTime = "0";
  }
}
function firstX() {
  if (gameOver == true) {
    alert("Reinicie o Game para Jogar de novo");
  } else if (playerTime == false) {
    playerTime = "1";
  }
}
