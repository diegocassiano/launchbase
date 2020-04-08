//Programa que armazena dados da empresa Rocketseat utilizando 
//do conceito de objetos

const usuario = {
    nome: ['Diego Cassiano', 'Tiago', 'Gabriel','Jéssica','Davi'],
    
    empresa: {
        nome: 'RocketSeat',
        foco: 'Programação',
        cor: 'Roxo',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            numero: 260,

        }

    }
}

console.log(`O nome do usuário é ${usuario.nome[0]}, funcionário da ${usuario.empresa.nome}.` )
console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco.rua}, Nº ${usuario.empresa.endereco.numero}.`)