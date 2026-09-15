type CardProps = {
  id: number;
  titulo: string;
  tags: Array<string>;
  prioridade: "media" | "alta" | "baixa";
};

export const originalCard: CardProps = {
  id: 1,
  titulo: "Ajustar API",
  tags: ["backend"],
  prioridade: "media",
};

function adicionarTag(card: CardProps, novatag: string) {
  const oldTags = card.tags;
  const newCard = { ...card, tags: [...oldTags, novatag] };
  return newCard;
}

function mesclarConfig(padrao, overrides) {
  const config = { ...padrao, ...overrides };
  return config;
}

function medialeituras(...leituras: Array<number>) {
  const media =
    leituras.reduce((acc, cur) => {
      return cur + acc;
    }, 0) / leituras.length;
  return media;
}

console.log(medialeituras(1, 2, 3));

console.log(
  mesclarConfig({ tema: "dark", idioma: "pt-br" }, { tema: "light" }),
);
//console.log(adicionarTag(originalCard, "redis"));
//console.log(originalCard);
