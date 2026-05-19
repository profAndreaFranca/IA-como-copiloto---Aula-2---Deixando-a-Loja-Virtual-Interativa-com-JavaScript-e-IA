let quantidadeCarrinho = 0;

const contadorCarrinho = document.getElementById("contador-carrinho");
const botoesComprar = document.querySelectorAll(".botao-comprar");
const mensagemCarrinho = document.getElementById("mensagem-carrinho");

botoesComprar.forEach(function(botao) {
  botao.addEventListener("click", function() {
    quantidadeCarrinho++;
    contadorCarrinho.textContent = quantidadeCarrinho;

    const card = botao.closest(".card");
    const nomeProduto = card.querySelector(".card-title").textContent;

    mensagemCarrinho.textContent = nomeProduto + " foi adicionado ao carrinho!";
    mensagemCarrinho.classList.remove("d-none");

    setTimeout(function() {
      mensagemCarrinho.classList.add("d-none");
    }, 2000);
  });
});
