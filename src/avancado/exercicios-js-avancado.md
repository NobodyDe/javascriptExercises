# Guia de Exercícios — JavaScript Avançado para Fullstack

15 exercícios para reforçar a base de JS que sustenta React, Express, Nest e qualquer stack moderna. Os cenários usam contextos parecidos com trabalho fullstack real (cards de kanban, leituras de sensores, APIs) — porque a base de JS que você mais usa no dia a dia é essa: manipular listas de objetos, moldar dados vindos de API, lidar com estado imutável.

---

## Como usar este guia

1. **Não pule direto para a dica.** Tente 15–20 minutos travado antes de ler a dica. É esse desconforto que fixa o conteúdo — se você só lê a solução, o cérebro reconhece mas não constrói o músculo de resolver.
2. Crie um repositório `js-fundamentos` (ou uma pasta local), um arquivo por exercício (`01-desestruturacao.js`, `02-spread-rest.js`...). Isso também vira portfólio de estudo pra mostrar em entrevista.
3. Rode com `node arquivo.js` direto, ou `node --watch arquivo.js` pra recarregar sozinho a cada save.
4. Depois de resolver em JS puro, se quiser ir além: tipe o exercício em TypeScript. Você já usa TS no trabalho, então isso conecta o exercício ao que você faz de verdade.
5. Sempre que possível, escreva 1-2 `console.assert` ou um teste rápido conferindo o resultado — isso já é o embrião do hábito de testar.
6. Não peço pra você me mostrar a solução pronta de propósito — é assim que você aprende. Mas depois que tentar, me manda o que você fez e eu reviso com você, ou te dou o gabarito comentado se travar de verdade.

---

## Dicas gerais para virar um dev melhor

- **`const` por padrão, `let` só quando for reatribuir, nunca `var`.** Isso já evita uma classe inteira de bugs de escopo.
- **Prefira imutabilidade.** Em vez de `array.push(x)` ou `obj.campo = y` direto, pense em `[...array, x]` e `{...obj, campo: y}`. É o padrão que Redux, Zustand e o próprio React esperam (nunca mutar state diretamente).
- **Encadeie métodos de array em vez de loops manuais quando fizer sentido.** `array.filter(...).map(...).reduce(...)` é mais declarativo — você lê "o quê" em vez de "como". Mas não force: se o encadeamento ficar ilegível, quebre em variáveis intermediárias com nomes bons.
- **Leia a MDN quando tiver dúvida de um método, não adivinhe o comportamento.** `sort()` muta o array original, `map()` não — esse tipo de detalhe custa bugs caros em produção se você assume errado.
- **Pratique explicar em voz alta o raciocínio antes de codar.** É exatamente o que uma entrevista técnica cobra, e treina a habilidade de estruturar o problema antes de sair digitando.
- **Depois de cada exercício, pergunte-se: "onde eu já usei isso sem perceber?"** Desestruturação de `req.body`, spread num reducer do Zustand, `.map()` renderizando uma lista no React — conectar a teoria ao código real que você já escreve é o que faz o conceito grudar.
- **Configure ESLint + Prettier no projeto de estudo também.** Ver o linter reclamar de imutabilidade, variável não usada ou `==` em vez de `===` em tempo real ensina mais rápido que qualquer aula.

---

## Exercícios

### 1. Desestruturação de objetos e arrays

**Nível:** Básico–Intermediário · **Conceitos:** destructuring, valores padrão, renomeação, desestruturação aninhada

**Contexto:** Uma API de login retorna este objeto:

```js
const respostaApi = {
  usuario: {
    nome: "Henrique",
    email: undefined,
    endereco: { cidade: "São Paulo" }
  },
  permissoes: ["editar_card", "criar_board"],
  token: "abc123"
};
```

**Enunciado:** Em uma única declaração `const { ... } = respostaApi`, extraia:
- `nome`, renomeado para `userName`;
- `email`, com valor padrão `"não informado"` caso seja `undefined`;
- `cidade` (de dentro de `endereco`), direto sem variável intermediária;
- a primeira posição de `permissoes`, renomeada para `permissaoPrincipal`.

**Dica:** dá pra desestruturar arrays e objetos na mesma expressão, e desestruturação aninhada não precisa de passo intermediário — vá direto ao campo que quer.

**Por que importa:** é exatamente o padrão que você usa toda vez que escreve `const { page = 1, limit = 10 } = req.query` num controller Express, ou `const { data: { user } } = response` numa chamada de API no front.

---

### 2. Spread e rest — atualização imutável de estado

**Nível:** Intermediário · **Conceitos:** spread operator, rest parameters, imutabilidade

**Contexto:** Um card de kanban:

```js
const card = { id: 1, titulo: "Ajustar API", tags: ["backend"], prioridade: "media" };
```

**Enunciado:**
1. Escreva `adicionarTag(card, novaTag)` que retorna um **novo** card com a tag adicionada, sem mutar o original.
2. Escreva `mesclarConfig(padrao, overrides)` que mescla dois objetos de configuração, onde `overrides` sobrescreve `padrao` campo a campo (não substitui o objeto inteiro).
3. Escreva `mediaLeituras(...leituras)` usando **rest parameters**, que recebe qualquer quantidade de números (leituras de um sensor) e retorna a média.

**Dica:** `{...obj, chave: valor}` sobrescreve só a chave citada; o resto do objeto permanece. Rest parameters (`...args` na assinatura da função) é o oposto de spread (`...array` num literal).

**Por que importa:** é literalmente como um reducer do Zustand ou uma action do Redux atualiza estado sem mutação — a base de qualquer state management em React.

---

### 3. Arrow functions vs function tradicional — o problema do `this`

**Nível:** Intermediário · **Conceitos:** arrow functions, binding de `this`, escopo léxico

**Contexto:**

```js
class BufferDeLeituras {
  constructor() {
    this.leituras = [];
  }

  iniciarColeta(sensor) {
    sensor.onLeitura(function (valor) {
      this.leituras.push(valor); // bug aqui
    });
  }
}
```

**Enunciado:** Esse código quebra com `TypeError: Cannot read properties of undefined`. Explique por escrito **por que** quebra, depois corrija de duas formas diferentes: (a) trocando para arrow function, (b) mantendo function tradicional mas resolvendo o `this` de outro jeito (dica: `.bind()` ou capturar `this` numa variável).

**Dica:** arrow function não tem seu próprio `this` — ela usa o `this` do escopo onde foi definida (escopo léxico). Function tradicional tem `this` dinâmico, definido por quem a chama.

**Por que importa:** esse é o bug clássico em callbacks de eventos, `setTimeout`, e handlers dentro de classes — inclusive em componentes React de classe ou serviços Angular/Nest baseados em classe.

---

### 4. Array methods encadeados — filter, map, reduce

**Nível:** Intermediário · **Conceitos:** `filter`, `map`, `reduce`, encadeamento

**Contexto:** Leituras de um sensor de temperatura, vindas da sua tabela `monitor`:

```js
const leituras = [
  { sensor: "temp-01", valor: 22.5, timestamp: "2026-09-15T08:00:00Z" },
  { sensor: "temp-01", valor: 31.2, timestamp: "2026-09-15T09:00:00Z" },
  { sensor: "temp-01", valor: 28.9, timestamp: "2026-09-15T10:00:00Z" },
  { sensor: "temp-01", valor: 35.0, timestamp: "2026-09-15T11:00:00Z" },
];
```

**Enunciado:** Em uma única expressão encadeada, filtre leituras acima de 25°C, transforme cada uma em uma string `"09:00 → 31.2°C"` (hora extraída do timestamp), e depois calcule a média das leituras filtradas (antes da formatação) usando `reduce`.

**Dica:** faça o `reduce` da média separado do `filter/map` das strings — são dois resultados diferentes, não force um único pipeline se isso piorar a legibilidade.

**Por que importa:** é o mesmo raciocínio de transformar uma resposta de API em dados prontos pra tabela ou gráfico no front, ou preparar um payload antes de gravar no banco.

---

### 5. `Object.entries`/`keys`/`values` e propriedades computadas

**Nível:** Intermediário · **Conceitos:** `Object.entries`, `Object.keys`, computed property names

**Contexto:**

```js
const board = {
  todo: [{ id: 1 }, { id: 2 }],
  doing: [{ id: 3 }],
  done: [{ id: 4 }, { id: 5 }, { id: 6 }],
};
```

**Enunciado:**
1. Usando `Object.entries`, transforme `board` num array `[{ status: "todo", total: 2 }, ...]`.
2. Escreva `criarContador(chave)` que retorna um objeto `{ [chave]: 0 }` usando **propriedade computada** — a chave vem de uma variável, não de um literal fixo.

**Dica:** `Object.entries(obj)` devolve pares `[chave, valor]` — combine com `.map()`. Propriedade computada é `{ [variavel]: valor }`.

**Por que importa:** é como você constrói objetos dinamicamente a partir de dados que só existem em tempo de execução — comum ao normalizar resposta de API ou montar filtros de query no backend.

---

### 6. Classes e herança

**Nível:** Intermediário–Avançado · **Conceitos:** classes, `extends`, `super`, sobrescrita de método

**Enunciado:** Modele:
- uma classe base `Sensor` com `id`, `nome`, `unidade`, e um método `formatarLeitura(valor)` que retorna `"${nome}: ${valor}${unidade}"`;
- `SensorTemperatura extends Sensor`, que no construtor já fixa `unidade = "°C"` (chamando `super`);
- `SensorUmidade extends Sensor`, que sobrescreve `formatarLeitura` para adicionar um aviso se `valor > 80` (`"⚠️ umidade alta"`).

**Dica:** `super(...)` no construtor da subclasse tem que ser chamado antes de usar `this`. Pra sobrescrever mantendo parte do comportamento original, você pode chamar `super.formatarLeitura(valor)` dentro do método filho.

**Por que importa:** é a mesma lógica de herança que sustenta controllers/services no Nest (`extends BaseService`), ou modelagem de entidades que compartilham comportamento comum.

---

### 7. Ternário, optional chaining e nullish coalescing

**Nível:** Intermediário · **Conceitos:** operador ternário, `?.`, `??`

**Contexto:**

```js
const pedido = {
  cliente: { nome: "Empresa X" },
  itens: [],
  desconto: 0,
};
```

**Enunciado:** Escreva, sem usar `if`:
1. Uma string `"Com desconto" : "Sem desconto"` baseada em `pedido.desconto > 0` (repare: `desconto` é `0`, um valor falsy legítimo — cuidado pra não confundir "não tem desconto" com "desconto é zero").
2. O nome do responsável do pedido acessando `pedido.cliente.responsavel.nome` sem quebrar caso `responsavel` não exista.
3. A quantidade de itens, usando `??` para cair em `"nenhum item"` apenas se `itens` for `null`/`undefined` (não se for array vazio — pense por que `??` resolve isso melhor que `||`).

**Dica:** `??` só cai no valor da direita se a esquerda for `null` ou `undefined` — diferente de `||`, que também cai em `0`, `""` e `false`. Esse é o erro mais comum de quem migra de `||` pra `??`.

**Por que importa:** é exatamente o tipo de bug sutil que aparece ao renderizar props opcionais no React ou tratar campos opcionais de uma resposta de API.

---

### 8. Loops — `for...of`, `for...in`, `forEach`

**Nível:** Básico–Intermediário · **Conceitos:** iteração, diferenças entre os três

**Contexto:**

```js
const sensores = new Map([
  ["temp-01", 22.5],
  ["umid-01", 65],
]);
const board = { todo: 2, doing: 1, done: 3 };
const pedidos = [{ id: 1, total: 100 }, { id: 2, total: 250 }];
```

**Enunciado:**
1. Itere `sensores` (um `Map`) com `for...of`, imprimindo `"chave: valor"`.
2. Itere as chaves de `board` (um objeto plano) com `for...in`.
3. Some o `total` de todos os `pedidos` usando `forEach`, depois refaça a mesma soma com `for...of` — compare os dois.

**Dica:** `for...in` itera **chaves**, inclusive as herdadas do protótipo (evite usar em arrays por isso). `for...of` itera **valores** de qualquer iterável (array, Map, Set, string). `forEach` é um método de array, não funciona em objetos nem tem `break`.

**Por que importa:** escolher a ferramenta errada de loop é uma fonte clássica de bug sutil (ex: `for...in` num array pegando índices como string) — saber a diferença de cor evita isso.

---

### 9. Closures e funções de alta ordem — memoização

**Nível:** Avançado · **Conceitos:** closures, funções de alta ordem, estado privado

**Contexto:** Uma consulta ao banco (`buscarSensorPorId`) é lenta e você quer evitar repetir a mesma busca.

**Enunciado:** Escreva `memoizar(fn)`, uma função de alta ordem que recebe uma função e devolve uma nova versão que guarda em cache (num objeto/Map **privado**, inacessível de fora) o resultado de cada argumento já calculado, evitando reprocessar.

```js
const buscarSensorPorIdMemoizado = memoizar(buscarSensorPorId);
buscarSensorPorIdMemoizado(1); // calcula
buscarSensorPorIdMemoizado(1); // vem do cache
```

**Dica:** o cache precisa viver numa variável declarada **fora** da função retornada, mas **dentro** de `memoizar` — é isso que cria a closure. Use o argumento como chave do cache (cuidado se a função tiver múltiplos argumentos: pode precisar de `JSON.stringify(args)` como chave).

**Por que importa:** memoização é a base conceitual de `useMemo`/`useCallback` no React, e do próprio conceito de cache em qualquer backend.

---

### 10. Async/await, Promises e tratamento de erros

**Nível:** Avançado · **Conceitos:** `async/await`, `Promise.all`, `try/catch`

**Contexto:** Duas funções assíncronas simuladas:

```js
function buscarLeituras(sensorId) { /* retorna Promise */ }
function buscarMetadadosSensor(sensorId) { /* retorna Promise */ }
```

**Enunciado:** Escreva `async function carregarDashboard(sensorId)` que busca as duas coisas **em paralelo** (não uma depois da outra) usando `Promise.all`, trata erro de cada chamada com `try/catch` retornando uma mensagem clara de qual das duas falhou, e retorna `{ leituras, metadados }` quando as duas derem certo.

**Dica:** `await` sequencial (`await a(); await b();`) espera uma terminar pra começar a outra — desperdiça tempo quando elas são independentes. `Promise.all([a(), b()])` dispara as duas juntas.

**Por que importa:** é a diferença entre uma rota Express que demora 2s porque busca dados em série, e uma que demora 1s porque busca em paralelo — impacto direto em performance de API.

---

### 11. Template literals e geração de strings

**Nível:** Básico–Intermediário · **Conceitos:** template literals, interpolação, strings multilinha

**Contexto:** Array de cards de kanban.

**Enunciado:**
1. Gere um log formatado por card: `` `[${prioridade.toUpperCase()}] ${titulo} — venc: ${dueDate}` ``.
2. Gere uma tabela em Markdown (string multilinha, cabeçalho + uma linha por card) a partir do array — útil pra gerar relatórios rapidamente.

**Dica:** template literal com `` ` `` (crase) permite quebra de linha direto dentro da string e expressões `${...}` dentro — incluindo chamadas de método como `.toUpperCase()`.

**Por que importa:** você já usa isso toda vez que monta uma URL dinâmica, uma mensagem de log ou (com cuidado, nunca concatenando input de usuário direto) uma query — vale reforçar que para SQL de verdade o certo é sempre usar parâmetros (`$1`, `?`) e não interpolação de string, por segurança contra SQL injection.

---

### 12. Parâmetros padrão e desestruturação na assinatura da função

**Nível:** Intermediário · **Conceitos:** default parameters, destructuring em parâmetros

**Enunciado:** Escreva uma função `listarPedidos` que simula os parâmetros de um controller Express, recebendo um único objeto e já desestruturando na assinatura:

```js
function listarPedidos({ page = 1, limit = 10, ordenarPor = "criadoEm" } = {}) {
  // ...
}
```

Implemente o corpo retornando um objeto `{ page, limit, ordenarPor, offset }`, calculando `offset = (page - 1) * limit`. Teste chamando sem nenhum argumento, com só `{ page: 2 }`, e com todos os campos.

**Dica:** o `= {}` no final da desestruturação do parâmetro é o que permite chamar a função **sem argumento nenhum** sem quebrar — sem isso, `listarPedidos()` lançaria erro ao tentar desestruturar `undefined`.

**Por que importa:** é exatamente `function listarPedidos(req, res) { const { page = 1, limit = 10 } = req.query; ... }` — o padrão mais comum de controller em Express/Nest para paginação.

---

### 13. Transformação de arrays de objetos — agrupar, ordenar, deduplicar

**Nível:** Avançado · **Conceitos:** `reduce` para agrupamento, `sort`, `Set` para deduplicação

**Contexto:**

```js
const cards = [
  { id: 1, assignee: "Henrique", prioridade: "alta", tags: ["backend", "urgente"] },
  { id: 2, assignee: "Ana", prioridade: "media", tags: ["frontend"] },
  { id: 3, assignee: "Henrique", prioridade: "baixa", tags: ["backend"] },
];
```

**Enunciado:**
1. Agrupe os cards por `assignee` num objeto `{ Henrique: [...], Ana: [...] }` usando `reduce`.
2. Ordene uma cópia do array por prioridade (`alta` > `media` > `baixa`) sem mutar o array original.
3. Extraia todas as tags únicas do array inteiro (sem repetição) numa única linha.

**Dica:** pra ordenar sem mutar, tire uma cópia com `[...cards]` antes de chamar `.sort()` (que muta). Pra prioridade textual, mapeie pra um número (`{ alta: 3, media: 2, baixa: 1 }`) e compare os números. `new Set(array.flatMap(c => c.tags))` resolve a deduplicação.

**Por que importa:** é o tipo de transformação que você faz toda hora ao preparar dados vindos do banco pra exibir agrupados/ordenados no front, sem depender de uma query SQL mais complexa pra isso.

---

### 14. Recursão — estruturas hierárquicas

**Nível:** Avançado · **Conceitos:** recursão, estruturas em árvore

**Contexto:**

```js
const categorias = [
  { id: 1, nome: "Eletrônicos", subcategorias: [
    { id: 2, nome: "Celulares", subcategorias: [] },
    { id: 3, nome: "Notebooks", subcategorias: [
      { id: 4, nome: "Gamer", subcategorias: [] }
    ]},
  ]},
];
```

**Enunciado:** Escreva `contarTotal(categorias)`, uma função recursiva que conta quantas categorias existem no total, incluindo todas as subcategorias em qualquer profundidade. Depois escreva `achatar(categorias)` que retorna um array plano com todos os nomes, em qualquer nível.

**Dica:** toda função recursiva precisa de um **caso base** (aqui: `subcategorias` vazio, onde a recursão para) e um **caso recursivo** que chama a si mesma nos filhos. Cuidado pra sempre progredir em direção ao caso base, senão é recursão infinita.

**Por que importa:** estrutura em árvore aparece toda hora — comentários com respostas, categorias de produto, estrutura de pastas, menus aninhados. Reconhecer "isso é uma árvore, recursão resolve" é uma habilidade que economiza muito código gambiarra.

---

### 15. Closures como módulo — mini Event Emitter

**Nível:** Avançado · **Conceitos:** closures, encapsulamento, padrão pub/sub

**Enunciado:** Implemente `criarEventEmitter()`, uma função que retorna um objeto com três métodos: `on(evento, callback)` (registra um listener), `emit(evento, dado)` (chama todos os listeners registrados pra aquele evento, passando `dado`), e `off(evento, callback)` (remove um listener específico). O armazenamento dos listeners deve ficar **privado**, só acessível através desses três métodos.

```js
const emitter = criarEventEmitter();
emitter.on("card:criado", (card) => console.log("novo card:", card.titulo));
emitter.emit("card:criado", { titulo: "Testar API" });
```

**Dica:** guarde os listeners num objeto `{ evento: [callback1, callback2] }` declarado dentro de `criarEventEmitter`, fora dos três métodos retornados — de novo, é a closure segurando esse estado privado.

**Por que importa:** isso é uma versão simplificada do `EventEmitter` nativo do Node.js (usado por streams, pelo próprio Express internamente) e do padrão pub/sub que aparece em WebSockets, filas (BullMQ) e comunicação entre componentes desacoplados.

---

## Depois de terminar

Quando resolver os 15, os próximos passos naturais são:
- Refazer os que mais travaram, mas de cabeça, sem olhar o enunciado de novo — o teste real é se você lembra sem o contexto na tela.
- Tipar 3-4 deles em TypeScript, já que é o que você usa no trabalho.
- Me mostrar suas soluções pra eu revisar, ou pedir o gabarito comentado dos que travou.
