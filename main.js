const board = document.getElementById("board");

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("button");
  cell.className = "cell";
  cell.textContent = "";
  cell.dataset.index = i;
  board.appendChild(cell);
}

document.getElementById("hint").addEventListener("click", () => {
  alert("Aquí irá el cálculo de pistas con grafos.");
});
