const nome = 'Joana'
const sexo = 'F'
const idade = '30'
const contribuicao = '10'

const homem = 'M' 

if( sexo === homem){
    if( idade >=65 && contribuicao >=35){
        console.log(`${nome}, você já pode se aposentar!`)
    }else {
        console.log(`${nome}, você ainda não está apto a se aposentar!`)
    }
}else {
    if( idade >=60 && contribuicao >=30){
        console.log(`${nome}, você já pode se aposentar!`)
    }else {
        console.log(`${nome}, você ainda não está apta a se aposentar!`)
    }
}