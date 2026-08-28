//checar se o veiculo foi vendido
const checkvenda = document.getElementById("btnvenda");
const dadosvenda = document.getElementById("dadosvenda");

checkvenda.addEventListener("change", () => {
  if (checkvenda.checked) {
    dadosvenda.style.display = "block";
    dadosvenda.style.opacity = "1";
    dadosvenda.style.pointerEvents = "auto";
  } else {
    dadosvenda.style.display = "block";
    dadosvenda.style.opacity = "0.5";
    dadosvenda.style.pointerEvents = "none";
  }
});

//troca de campo automatica
function movenext(atual, proximocampo) {
  atual.value = atual.value.toUpperCase();

  if (atual.value.length === atual.maxLength) {
    document.getElementById(proximocampo).focus();
  }
}

//funcionamento do botao cadastrar
document.getElementById("btncadastrar").addEventListener("click", () => {
  const modelo = document.getElementById("modelo").value;
  const cc = document.getElementById("cc").value;
  const versao = document.getElementById("versao").value;
  const placa =
    document.getElementById("letra").value +
    "-" +
    document.getElementById("numeros").value;
  const cidade =
    document.getElementById("cidade").value +
    "/" +
    document.getElementById("uf").value;
  const km = document.getElementById("km").value;
  const cor = document.getElementById("cor").value;
  const anofabricado = document.getElementById("anofabricado").value;
  const anomodelo = document.getElementById("anomodelo").value;
  const comprada = document.getElementById("comprador").value;
  const refcomprada = document.getElementById("refcomprador").value;
  const datacomprada = document.getElementById("dtcomp").value;
  const valorcompra = document.getElementById("vlcomp").value;

  let baixa = false;

  const jogo = document.getElementById("jogoderoda");
  let jogoderoda;
  if (jogo.checked) {
    jogoderoda = 1;
  } else {
    jogoderoda = 0;
  }

  const checkvned = document.getElementById("btnvenda");
  let dadosvenda;
  if (checkvned.checked) {
    vendida = document.getElementById("vendida").value;
    refvendida = document.getElementById("refvendida").value;
    datavenda = document.getElementById("datavenda").value;
    valorvenda = document.getElementById("valorvenda").value;
    baixa = true;
  } else {
    vendida = null;
    refvendida = null;
    datavenda = null;
    valorvenda = 0;
  }

  const motos = {
    modelo,
    cc,
    versao,
    placa,
    cidade,
    km,
    cor,
    anofabricado,
    anomodelo,
    comprada,
    refcomprada,
    datacomprada,
    valorcompra,
    vendida,
    refvendida,
    datavenda,
    valorvenda,
    jogoderoda,
    baixa,
  };

  const motosjson = JSON.stringify(motos, null, 2);

  //        /*
  fetch("http://localhost:8080/moto", {
    method: "POST",
    body: motosjson,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log("sucesso", data))
    .catch((error) => console.log("error", error));
  //            */

  alert("cadastrado com sucesso");

  //para testar na pagina
  //document.getElementById("teste").innerText=motosjson;
});
