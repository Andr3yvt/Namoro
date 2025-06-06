const textMoments = `
Preparei isso com todo o meu coração...

Sou muito grato pela sua companhia. Todos os dias penso em você e em como posso te fazer sorrir de novo, só para ouvir sua risada mais uma vez. Sei que à distância isso se torna mais difícil — e sinceramente, nem sei direito como fazer — mas eu quero tentar.

Foi por isso que tirei um tempo para criar esse site. Cada momento com você tem sido mágico. Você é uma menina incrível, cheia de vida e sonhos, e eu entendo que queira viver sua adolescência intensamente. Só peço que, de alguma forma, eu possa continuar fazendo parte da sua vida.

Mesmo que a gente ainda não tenha se encontrado pessoalmente, os sentimentos que tenho são reais. Estar com você, mesmo de longe, já faz meu mundo melhor. E os momentos que compartilhei com você… são inesquecíveis.

Se eu pudesse voltar no tempo, reviveria tudo mil vezes.
Mas a verdade é que, com você, o presente já é o suficiente — porque você transforma o agora no melhor lugar do mundo.

Você é, sem dúvida, a melhor parte da minha história.
E se tudo isso aqui for uma forma de te lembrar disso, então valeu cada segundo.
`;

document.addEventListener("DOMContentLoaded", () => {
  const formattedText = textMoments
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")
    .replace(/ {2}/g, "&nbsp;&nbsp;");

  document.querySelectorAll("*").forEach(el => {
    if (el.innerHTML.includes("${textMoments}")) {
      el.innerHTML = el.innerHTML.replace(/\$\{textMoments\}/g, formattedText);
    }
  });
});
