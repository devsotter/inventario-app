function validarProduto(idpersonagemProduto, idCodProduto, idquantosProduto) {
  let personagem = document.getElementById(idpersonagemProduto).value;
  let item = document.getElementById(idCodProduto).value;
  let quantos = document.getElementById(idquantosProduto).value;

  if (personagem == "")
    alert("Favor identificar seu vulgo na alteração!");
  else if (item == "")
    alert("Ta dando uma de Dilma e vai estocar vento no cofre?");
  else cadastrarProduto(personagem, item, parseInt(quantos));
}

function cadastrarProduto(produto, item, quantos) {
  let novoProduto = { personagem: produto, item: item, quantidade: quantos };

  if (typeof Storage !== "undefined") {
    let produtos = localStorage.getItem("produtos");
    if (produtos == null) produtos = [];
    else produtos = JSON.parse(produtos);
    produtos.push(novoProduto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    alert(
      "Você adicionou ao seu Log Privado " +
        quantos +
        " unidades do item " +
        item +
        "!"
    );
    atualizarAlteracoes("alteracoes");
    location.reload();
  } else
    alert(
      "A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação"
    );
}

function atualizarAlteracoes(idCampo) {
  localStorage.setItem(
    "alteracoes",
    ++document.getElementById(idCampo).innerHTML
  );
}

function carregarAlteracoes(idCampo) {
  if (typeof Storage !== "undefined") {
    let alteracoes = localStorage.getItem("alteracoes");
    if (alteracoes == null) alteracoes = 0;
    document.getElementById(idCampo).innerHTML = alteracoes;
  } else
    alert(
      "A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação"
    );
}
function listarEstoque() {
    if (typeof Storage !== "undefined") {
      let produtos = localStorage.getItem("produtos");
      var container = document.createElement("div");
      container.innerHTML = "<h1> alterações do cofre:</h1>";
      
      if (produtos == null) {
        var mensagem = document.createElement("h3");
        mensagem.textContent = "Ainda não há nenhum item no seu cofre";
        container.appendChild(mensagem);
      } else {
        produtos = JSON.parse(produtos);
        produtos.forEach((produto) => {
          var ul = document.createElement("ul");
          ul.classList.add("meu-ul");
  
          var li1 = document.createElement("li");
          li1.classList.add("meu-li");
          li1.textContent = "Nome do vulgo: " + produto.personagem;
          ul.appendChild(li1);
  
          var li2 = document.createElement("li");
          li2.classList.add("meu-li");
          li2.textContent = "Nome do item: " + produto.item;
          ul.appendChild(li2);
  
          var li3 = document.createElement("li");
          li3.classList.add("meu-li");
          li3.textContent = "Quantidade de itens: " + produto.quantidade;
          ul.appendChild(li3);
  
          container.appendChild(ul);
        });
      }
  
      var body = document.querySelector("body");
      body.appendChild(container);
    } else {
      alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");
    }
  }
  
