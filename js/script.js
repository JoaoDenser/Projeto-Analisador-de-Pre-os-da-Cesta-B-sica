const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    resultado.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
        const nome = document.getElementById(`nome${i}`).value.trim();
        const precoAnterior = parseFloat(
            document.getElementById(`precoAnterior${i}`).value
        );
        const precoAtual = parseFloat(
            document.getElementById(`precoAtual${i}`).value
        );

        if (
            nome === "" ||
            isNaN(precoAnterior) ||
            isNaN(precoAtual) ||
            precoAnterior <= 0 ||
            precoAtual < 0
        ) {
            resultado.innerHTML += `
                <p>Verifique os dados do produto ${i}.
                O nome deve ser preenchido, o preço anterior
                deve ser maior que zero e o preço atual não pode
                ser negativo.</p>
            `;
            continue;
        }

        const variacao =
            ((precoAtual - precoAnterior) / precoAnterior) * 100;

        let situacao;

        if (variacao > 0) {
            situacao = "AUMENTO";
        } else if (variacao < 0) {
            situacao = "QUEDA";
        } else {
            situacao = "ESTÁVEL";
        }

        resultado.innerHTML += `
            <div class="produto-resultado">
                <h3>${nome}</h3>
                <p>Preço anterior: ${precoAnterior.toLocaleString(
                    "pt-BR",
                    { style: "currency", currency: "BRL" }
                )}</p>
                <p>Preço atual: ${precoAtual.toLocaleString(
                    "pt-BR",
                    { style: "currency", currency: "BRL" }
                )}</p>
                <p>Variação: ${variacao.toFixed(2)}%</p>
                <p>Situação: <strong>${situacao}</strong></p>
            </div>
        `;
    }
});
