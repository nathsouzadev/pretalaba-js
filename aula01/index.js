function validarVoto(idade){
    if (idade >= 18 && idade < 70 ) {
        console.log('Voce deve votar e o voto é obrigatorio')
    } else if (idade >= 16 && idade < 18 || idade >=70 ) {
        console.log('Voce pode votar, mas não é obrigatorio')
    } else {
        console.log('Voce nao pode votar')
    }
}

function somar (num1, num2) {
    const resultado = num1 + num2
    console.log(resultado)
}

function bemVinda(nome, idade) {
    console.log("Bem vinda, " + nome + ". Parabéns pelos " + idade + " anos!")
}

bemVinda('Nath', '32')
validarVoto(58)
