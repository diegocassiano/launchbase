//Criar programa que calcula a médias 
//das notas entre os alunos e envia 
//mensagem do cálculo da média


// Criação de lista usando conceitos de array e objetos
const aluno = [
    {
        nome : 'Diego',
        nota : 10
    },

    {
        nome : 'Davi',
        nota : 8
    },

    {
        nome : 'Gabriel',
        nota : 8
    },

    {
        nome : 'Paulo',
        nota : 7
    },

    {
        nome : 'Jéssica',
        nota : 10
    }
    
]

console.log(aluno)

const media = (aluno[0].nota + aluno[1].nota + aluno[2].nota + aluno[3].nota + aluno[4].nota)/5

if(media > 5){
   console.log(`A média da turma foi ${media}. Parabéns a todos!`)
}else{
    console.log('A média da turma foi menor que 5.')
}