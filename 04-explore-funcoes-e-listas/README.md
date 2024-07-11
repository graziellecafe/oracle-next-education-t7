# Funções e Listas
## Como deixar o código dinâmico com JS

**Exemplo**: 
```js
let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Jogo do número secreto'; 
function exibirTextoNaTela(tag, texto) { 
  let campo = document.querySelector(tag); 
  campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto'); 
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 

```

**Outro modo de realizar com mais diferentes textos**

```js
function exibirTextoNaTela(tag, texto) { 
  let campo = document.querySelector(tag); 
  campo.innerHTML = texto; 
}

exibirTextoNaTela('h1', 'Jogo do número secreto'); 
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
```

