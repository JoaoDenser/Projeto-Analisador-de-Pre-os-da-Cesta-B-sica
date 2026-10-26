const formulario = document.querySelector("#formulario");
const listaResultados = document.querySelector("#lista-resultados");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  listaResultados.replaceChildren();

  for (let i = 1; i <= 3; i++) {
    const nome = document.querySelector(`#nome${i}`).value.trim();
    const anterior = Number(
      document.querySelector(`#anterior${i}`).value
    );
    const atual = Number(
      document.querySelector(`#atual${i}`).value
    );

    if (anterior < 0 || atual < 0) {
      alert("Os preços não podem ser negativos.");
      return;
    }

    const variacao = atual - anterior;
    let situacao;
    let classe;

    if (variacao > 0) {
      situacao = "Houve aumento de preço.";
      classe = "aumento";
    } else if (variacao < 0) {
      situacao = "Houve redução de preço.";
      classe = "reducao";
    } else {
      situacao = "O preço foi mantido.";
      classe = "mantido";
    }

    const resultado = document.createElement("article");
    resultado.className = `resultado ${classe}`;

    const titulo = document.createElement("h3");
    titulo.textContent = nome;

    const descricao = document.createElement("p");
    descricao.textContent = situacao;

    const valores = document.createElement("p");
    valores.textContent =
      `Anterior: ${anterior.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })} | Atual: ${atual.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}`;

    const diferenca = document.createElement("p");
    diferenca.textContent =
      `Variação: ${variacao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })}`;

    resultado.append(titulo, descricao, valores, diferenca);
    listaResultados.appendChild(resultado);
  }

  document.querySelector("#resultados").scrollIntoView({
    behavior: "smooth"
  });
});
