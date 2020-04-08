const nome = 'Diego';
const peso = 78;
const altura = 1.65;

const imc = (peso  / (altura * altura) )

if ( imc >= 30){
    console.log(`${nome}, seu IMC é de ${imc}. Você esta acima do peso!` )
}else {
    console.log(`${nome}, seu IMC é de ${imc}. Você esta não acima do peso!` )
}