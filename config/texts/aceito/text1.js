// ⚠️ Modifique apenas as variáveis!

var textAceito1 = `O começo da nossa história 💖`;

// ⚠️ Modifique apenas as variáveis!

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\$\{textAceito1\}/g, textAceito1);
  });
});