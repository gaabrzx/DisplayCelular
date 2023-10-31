const content = document.querySelector(".result");
const message = document.querySelector("#message");

var vendaArea = document.querySelector("#venda p");
var porcentagemArea = document.querySelector("#porcentagem p");
var gastoArea = document.querySelector("#gasto p");
var lucroNumber = document.querySelector("#lucroNumber p");

const button = document
  .querySelector("#mainButton")
  .addEventListener("click", () => {
    let valorDoCelular = Number(document.querySelector("#celular").value);
    let valorDaTela = Number(document.querySelector("#tela").value);
    let porcentagemFinal = Number(document.querySelector("#percentage").value);

    content.style.display = "flex";
    message.style.display = "flex";

    let soma = valorDoCelular + valorDaTela;
    let novoValor = soma * (1 + porcentagemFinal / 100);
    let math = novoValor - soma;
    let final = soma + math;

    gastoArea.textContent = soma + "R$";
    vendaArea.textContent = novoValor + "R$";
    lucroNumber.textContent = math + "R$";

    document.querySelector("#present").textContent = soma + "R$";
    document.querySelector("#finalResult").textContent = final + "R$";
    console.log(novoValor);
  });
