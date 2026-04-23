document.addEventListener("DOMContentLoaded", function () {

  let titulo = document.getElementById("titulo");
  let texto = document.getElementById("textoCapitalismo");
  let botaoTexto = document.getElementById("btnTexto");
  let imagem = document.getElementById("imgDiscord");

  window.mudarTitulo = function () {
    titulo.innerHTML = "Us Guri do Capitalismo";
  };

  botaoTexto.addEventListener("click", function () {
    texto.innerHTML = "Texto alterado pelo JavaScript!, Calma calabreso";
  });

  imagem.addEventListener("mouseover", function () {
    imagem.style.width = "300px";
  });

  imagem.addEventListener("mouseout", function () {
    imagem.style.width = "200px";
  });

  window.mostrarNome = function () {
    let nome = document.getElementById("inputNome").value;
    document.getElementById("saida").innerHTML = "Bem-vindo, " + nome + "!";
  };

/* Se DEUS quiser eu não vou ser programador web kkkk, bgl dificil do krai 2 HORS PRA FAZER 27 LINHAS...*/

});