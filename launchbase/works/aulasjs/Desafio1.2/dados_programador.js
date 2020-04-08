// Programa que armazena dados de um programador

const dados = {
    programador : [
        {
          nome:'Diego',
          idade:'23',
          tecnologias:{ 
            
            nome:['Java'],
            especialidade:['Desktop']
           
            }
        },

        {
            nome:'Jéssica',
            idade:'23',
            tecnologias:{ 
              
              nome:['C++','Python'],
              especialidade:['Desktop','Data Science']
             
              }
          },

          {
            nome:'Davi',
            idade:'20',
            tecnologias:{ 
              
              nome:['JavaScript'],
              especialidade:['Web/Mobile']
             
              }
          },
        
    ]
}

//console.log(dados.programador[2])
//console.log(dados.programador[1].tecnologias.especialidade)
//console.log(`O programador(a) ${dados.programador[1].nome} tem ${dados.programador[1].idade} anos e utiliza das tecnologias ${dados.programador[1].tecnologias.nome[0]} e ${dados.programador[1].tecnologias.nome[1]}, com especialidade em ${dados.programador[1].tecnologias.especialidade[0]} e ${dados.programador[1].tecnologias.especialidade[1]}.`) 
console.log(`O usuário(a) ${dados.programador[2].nome} tem ${dados.programador[2].idade} anos e utiliza a tecnologia ${dados.programador[2].tecnologias.nome[0]}, com especialidade em ${dados.programador[2].tecnologias.especialidade[0]}.`)
