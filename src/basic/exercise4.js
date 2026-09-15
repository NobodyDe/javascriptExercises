const transacoes = [
  { id: 1, valor: 50, categoria: "alimentacao", data: "2026-01-01" },
  { id: 2, valor: 100, categoria: "transporte", data: "2026-01-02" },
  { id: 3, valor: 30, categoria: "alimentacao", data: "2026-01-03" },
  { id: 4, valor: 50, categoria: "hospedagem", data: "2026-01-03" },
  { id: 5, valor: 50, categoria: "hospedagem", data: "2026-01-03" },
];

const valoresTransacoes = transacoes.reduce((acc, transacao) => {
  const key = transacao.categoria;

  if (!acc[key]) {
    acc[key] = {
      categorias: [],
      somaValor: 0,
    };
  }

  acc[key].categorias.push(transacao);
  acc[key].somaValor += transacao.valor;

  return acc;
}, {});

console.dir(valoresTransacoes, { depth: null });
