alert('Boas vindas ao jogo do número secreto'); 
let numeroMaximo = 5000; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);  
console.log(numeroSecreto);

let numeroChute; 
let tentativas = 1; 

while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log(numeroChute); 

    if (numeroChute == numeroSecreto){
        break; 
    } else { 
        if(numeroChute > numeroSecreto){
            alert(`O número secreto é menor que ${numeroChute}`); 
        } else {
            alert(`O número secreto é maior que ${numeroChute}`);
        }
    } tentativas++; 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto} e você acertou utilizando ${tentativas} ${palavraTentativa} `);

