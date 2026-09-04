# 10 Exercícios: Fundamentos de Lógica e Sintaxe JavaScript

Esse aqui é o aquecimento: exercícios mais curtos, focados em sintaxe e lógica pura do JavaScript — sem estrutura de dados "de entrevista" (pilha, grafo, linked list). É a base que precisa sair no automático antes de qualquer desafio mais pesado. Complementa o arquivo anterior (padrões/estruturas de dados).

## Visão geral

| # | Exercício | Dificuldade | Conceito | Tempo sugerido |
|---|---|---|---|---|
| 1 | FizzBuzz | 🟢 Fácil | Loop + Condicional | ~5 min |
| 2 | Verificar Palíndromo | 🟢 Fácil | String | ~10 min |
| 3 | Title Case | 🟢 Fácil | String + Array | ~10 min |
| 4 | Maior Valor Sem Math.max() | 🟢 Fácil | Loop + Comparação | ~10 min |
| 5 | Pipeline map/filter/reduce | 🟡 Médio | Array methods | ~15 min |
| 6 | Destructuring + Spread/Rest | 🟢 Fácil | Sintaxe moderna | ~10 min |
| 7 | Truthy, Falsy e Coerção | 🟢 Fácil | Comparação de tipos | ~10 min |
| 8 | var, let e const | 🟡 Médio | Escopo + Hoisting | ~15 min |
| 9 | Fatorial e Fibonacci Recursivos | 🟡 Médio | Recursão | ~15 min |
| 10 | Contador de Frequência | 🟢 Fácil | Objeto + Loop | ~10 min |

## Como usar

Resolva sem consultar solução pronta — o objetivo aqui é automatizar sintaxe, não resolver puzzle. Se sair rápido e sem esforço, é ótimo sinal: essa base já tá consolidada e você pode voltar pro arquivo anterior com mais confiança.

---

## 1. FizzBuzz
🟢 **Fácil** · Loop + Condicional · Operador módulo

Percorra os números de 1 até `n`. Para múltiplos de 3, imprima `"Fizz"`; para múltiplos de 5, `"Buzz"`; para múltiplos de 3 **e** 5, `"FizzBuzz"`; caso contrário, o próprio número.

```javascript
function fizzBuzz(n) {
  // seu código aqui
}
```

**Exemplo:**
```
fizzBuzz(15)
→ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"
```

**No mundo real:** parece bobo, mas é o teste mais usado no mundo pra filtrar quem sabe programar de quem decorou sintaxe. Condicional + módulo + loop é a base de qualquer regra de negócio (faixa de desconto, faixa de preço, etc.).

---

## 2. Verificar Palíndromo
🟢 **Fácil** · String · Comparação

Implemente `isPalindrome(str)`, que verifica se uma string é um palíndromo (lê igual de trás pra frente), ignorando maiúsculas/minúsculas e espaços.

```javascript
function isPalindrome(str) {
  // seu código aqui
}
```

**Exemplo:**
```
isPalindrome("Arara") → true
isPalindrome("A base do teto desaba") → true
isPalindrome("JavaScript") → false
```

**No mundo real:** validação de dados que precisam de simetria, e é um dos primeiros exercícios que mostra se você manipula string na mão ou só chama método pronto pra tudo.

---

## 3. Title Case
🟢 **Fácil** · String + Array · split / map / join

Implemente `titleCase(str)`, que capitaliza a primeira letra de cada palavra de uma frase.

```javascript
function titleCase(str) {
  // seu código aqui
}
```

**Exemplo:**
```
titleCase("bem vindo ao mundo javascript") → "Bem Vindo Ao Mundo Javascript"
```

**No mundo real:** formatação de nome de usuário, título de produto, breadcrumb — qualquer texto que chega "cru" do banco antes de ir pra tela.

---

## 4. Maior Valor Sem Math.max()
🟢 **Fácil** · Loop · Comparação

Implemente `findMax(arr)`, que encontra o maior número de um array sem usar `Math.max()` ou `Math.max(...arr)`.

```javascript
function findMax(arr) {
  // seu código aqui
}
```

**Exemplo:**
```
findMax([3, 7, 2, 9, 4]) → 9
```

**No mundo real:** separa quem entende o que um loop faz por dentro de quem só decora o nome do método. Base de qualquer lógica de "achar o melhor candidato" (maior preço, melhor avaliação, etc.).

---

## 5. Pipeline com map, filter e reduce
🟡 **Médio** · Array methods encadeados · Programação funcional básica

Você tem uma lista de pedidos. Usando **apenas** `map`, `filter` e `reduce` (sem `for`), calcule o valor total dos pedidos que já foram pagos.

```javascript
const pedidos = [
  { id: 1, valor: 150, status: 'pago' },
  { id: 2, valor: 80,  status: 'pendente' },
  { id: 3, valor: 200, status: 'pago' },
  { id: 4, valor: 50,  status: 'cancelado' },
];

function totalPago(pedidos) {
  // seu código aqui
}
```

**Exemplo:**
```
totalPago(pedidos) → 350   // 150 + 200
```

**No mundo real:** é literalmente o que você escreve toda semana processando resposta de API antes de jogar num componente React ou numa rota do Node. É o padrão mais usado do JS moderno, disparado.

---

## 6. Destructuring + Spread/Rest
🟢 **Fácil** · Sintaxe moderna de objetos e arrays

Dado o objeto abaixo: **(a)** extraia `nome` e `email` direto em variáveis; **(b)** capture o resto das propriedades num objeto `outros`; **(c)** crie um novo objeto `usuarioAtualizado` com `ativo: true` adicionado, sem alterar o original.

```javascript
const usuario = {
  nome: 'Henrique',
  email: 'henrique@email.com',
  idade: 25,
  cidade: 'São Paulo',
};

// seu código aqui
```

**Resultado esperado:**
```javascript
nome                 // 'Henrique'
email                // 'henrique@email.com'
outros                // { idade: 25, cidade: 'São Paulo' }
usuarioAtualizado    // { ...usuario, ativo: true }
```

**No mundo real:** é a sintaxe que você usa em toda `props` de componente React, todo `req.body` de rota Node, e todo update imutável de state. Se não sai automático, trava o dia a dia inteiro.

---

## 7. Truthy, Falsy e Coerção de Tipos
🟢 **Fácil (mas traiçoeiro)** · Comparação · `==` vs `===`

Sem rodar no console, preveja o resultado de cada linha abaixo. Depois rode e confira — e explique o *porquê* de cada uma.

```javascript
console.log([] == false);        // ?
console.log('0' == 0);           // ?
console.log(null == undefined);  // ?
console.log(NaN === NaN);        // ?
console.log([] + []);            // ?
console.log([] + {});            // ?
console.log(0 == '');            // ?
```

**No mundo real:** coerção de tipo é a maior fonte de bug silencioso em JS puro — é exatamente por isso que TypeScript existe. Entender isso de cabeça é o que separa "sei JavaScript" de "decorei React".

---

## 8. var, let e const (Escopo e Hoisting)
🟡 **Médio** · Escopo de bloco vs. função · Hoisting

Preveja o output do código abaixo e explique por quê:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 0);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 0);
}
```

Depois, reescreva o primeiro loop pra ele se comportar como o segundo — sem trocar `var` por `let`.

**No mundo real:** é a pergunta clássica de entrevista JS pleno/sênior — testa se você entende closure e escopo, não só sintaxe. Aparece direto em bug de loop com callback assíncrono (listeners, requisições em lote).

---

## 9. Fatorial e Fibonacci Recursivos
🟡 **Médio** · Recursão · Caso base + chamada recursiva

Implemente as duas funções usando recursão (não loop):

```javascript
function fatorial(n) {
  // seu código aqui
}

function fibonacci(n) {
  // seu código aqui
}
```

**Exemplo:**
```
fatorial(5) → 120       // 5*4*3*2*1
fibonacci(7) → 13       // 0,1,1,2,3,5,8,13...
```

**No mundo real:** recursão pura aparece pouco no dia a dia, mas é a base mental pra entender renderização de árvore de componentes (React), navegação de estrutura de pastas e parsing de JSON aninhado. **Bônus:** calcule `fibonacci(35)`, sinta o quanto trava, e pesquise sobre memoização.

---

## 10. Contador de Frequência de Caracteres
🟢 **Fácil** · Objeto como contador · Loop + acumulador

Implemente `contarCaracteres(str)`, que retorna um objeto com a contagem de cada caractere numa string.

```javascript
function contarCaracteres(str) {
  // seu código aqui
}
```

**Exemplo:**
```
contarCaracteres("banana")
→ { b: 1, a: 3, n: 2 }
```

**No mundo real:** base de qualquer contador simples — quantas vezes um produto foi visto, quantos votos cada opção recebeu, contagem de tags mais usadas.

---

## Depois de resolver

- Cola o código aqui que eu reviso.
- Esse bloco saiu fácil demais? Ótimo sinal — bora pro arquivo anterior (padrões/estruturas de dados) ou pra uma leva mais avançada, com árvore binária e programação dinâmica.
