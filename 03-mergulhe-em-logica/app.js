alert('Boas vindas ao jogo do número secreto'); 
let numeroSecreto = 4; 
console.log(numeroSecreto);

let numeroChute = prompt('Escolha um número entre 1 e 10'); 

if (numeroChute == numeroSecreto){
    alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto}`);
} else {
 
    alert('Infelizmente você errou. Tente novamente')
}
