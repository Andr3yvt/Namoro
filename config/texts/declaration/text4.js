// ⚠️ Modifique apenas as variáveis!

var textDeclaration4 = `Antes de qualquer coisa, respira fundo... Agora, por favor, leia essas palavras com o coração aberto, porque cada linha que escrevi aqui carrega uma parte de mim. Talvez eu não seja a melhor pessoa com palavras, mas dentro de mim existe um mundo inteiro de sentimentos que só fazem sentido quando penso em você.`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textDeclaration4\}/g, textDeclaration4);
  });
});