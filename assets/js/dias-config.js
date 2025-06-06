function formatarData(dataStr) {
  const partes = dataStr.split('/');
  return new Date(partes[2], partes[1] - 1, partes[0]);
}

function atualizarTempo() {
  const dataEspecialFormatada = formatarData(dataEspecial);
  const agora = new Date();
  const diff = agora - dataEspecialFormatada;

  const diasTotais = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor((diasTotais % 365) / 30);

  let tempoFormatado = "";
  if (anos > 0) tempoFormatado += `${anos} ${anos === 1 ? "ano" : "anos"}`;
  if (meses > 0) tempoFormatado += `${anos > 0 ? " e " : ""}${meses} ${meses === 1 ? "mês" : "meses"}`;
  if (!tempoFormatado) tempoFormatado = "menos de 1 mês";

  document.getElementById("tempo-formatado").textContent = tempoFormatado;
  document.getElementById("dias").textContent = diasTotais;
}

document.addEventListener("DOMContentLoaded", () => {
  atualizarTempo();
  setInterval(atualizarTempo, 60 * 1000); 
});