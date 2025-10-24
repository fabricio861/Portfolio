const display = document.getElementById("display");
const buttons = document.querySelectorAll(".botão button");

let valorAtual = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      valorAtual = "";
      display.value = "";
    } else if (value === "c") {
      valorAtual = valorAtual.slice(0, -1);
      display.value = valorAtual;
    } else if (value === "√") {
      if(valorAtual !== ""){
        valorAtual = Math.sqrt(eval(valorAtual)).toString();
        display.value = valorAtual;
      }
    } else if (value === "=") {
      try {
        valorAtual = eval(valorAtual).toString();
        display.value = valorAtual;
      } catch {
        display.value = "Erro";
        valorAtual= "";
      }
    } else {
      valorAtual += value;
      display.value = valorAtual;
    }
  });
});
