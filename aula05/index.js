// const senha = "123456"
// let senhaCerta = false

// if(!senhaCerta){
//     const senhaDigitada = prompt('Digite sua senha!')
//     console.log(senhaDigitada)
//     if(senhaDigitada === senha) {
//         senhaCerta = true
//     }
// }

// const lista = [
//     { lista: "Arroz", quantidade: 4 },
//     { lista: "Feijão", quantidade: 3 },
//     { lista: "Açucar", quantidade: 2 },
//     { lista: "Óleo", quantidade: 2 },
//     { lista: "Café", quantidade: 2 },
// ];

// let index = 0;
// let somaDeProdutos = 0;
// let totalLista = lista.length;

// do {
//     somaDeProdutos += lista[index].quantidade;
//     index++;

} while (index < totalLista);

let total = somaDeProdutos / totalLista;

console.log(somaDeProdutos);

let controle = 0

do { 
    console.log('Executando')
    controle += 1
} while ( controle < 3 )

for(let i = 0; i < 3; i++){
    console.log('Dentro do for')
}

let soma = 0
soma += 3
soma+= 4
