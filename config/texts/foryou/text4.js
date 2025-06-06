

const textFY4 = `aceita namorar comigo?
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textFY4
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textFY4}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textFY4\}/g, formattedText);
    }
  });
});
