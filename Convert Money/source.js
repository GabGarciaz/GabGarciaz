const button = document.getElementsByTagName("button")[0];
const select = document.getElementById("select");
const dolar = 5.2;
const euro = 5.9;
const convertvalues = () => {
  const input = document.getElementsByTagName("input")[0].value;
  const realvalor = document.getElementById("realvalor");
  const dolarreal = document.getElementById("dolarreal");
  realvalor.innerHTML = input;
  realvalor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);

  if (select.value === "US$ Dólar Americano") {
    dolarreal.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dolar);
  }

  if (select.value === "€Euro") {
    dolarreal.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euro);
  }
};

changeCurrency = () => {
  const maça = document.getElementById("maça");
  const imagem = document.getElementById("imagem");

  if (select.value === "US$ Dólar Americano") {
    maça.innerHTML = "Dolar americano";
    imagem.src = "..//estados-unidos.png";
  }

  if (select.value === "€Euro") {
    maça.innerHTML = "Euro";
    imagem.src = "..//euro.png";
  }
  convertvalues();
};
button.addEventListener("click", convertvalues);
select.addEventListener("change", changeCurrency);
