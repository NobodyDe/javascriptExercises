const leituras = [
  { sensor: "temp-01", valor: 22.5, timestamp: "2026-09-15T08:00:00Z" },
  { sensor: "temp-01", valor: 31.2, timestamp: "2026-09-15T09:00:00Z" },
  { sensor: "temp-01", valor: 28.9, timestamp: "2026-09-15T10:00:00Z" },
  { sensor: "temp-01", valor: 35.0, timestamp: "2026-09-15T11:00:00Z" },
];

const acima = leituras.filter((leitura) => leitura.valor > 25);

const mediaAcima = acima.reduce((acc, leitura) => {
  const soma = acc + leitura.valor;
  return soma;
}, 0);

const normalizado = acima.map((leitura) => {
  const horario = new Date(leitura.timestamp).toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${horario} -> ${leitura.valor}°C`;
});

console.log(mediaAcima / acima.length);
