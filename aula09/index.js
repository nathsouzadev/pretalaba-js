function escreverMensagem (){
    const textoDigitado = document.getElementById('nome').value

    const bemvinda = document.getElementById('bemvinda').innerHTML
    console.log(bemvinda)
    if(bemvinda.split(':')[1].length > 1){
        console.log(bemvinda.split(':'))
        document.getElementById('bemvinda').innerHTML = `Bem vinda: ${textoDigitado}`
    } else {
        document.getElementById('bemvinda').innerHTML += textoDigitado
    }
}

function adicionarAluna(){
    const aluna = document.getElementById('aluna').value
    document.getElementById('lista').innerHTML += `<p>${aluna}</p>`
    // const alunaElement = document.createElement('p')
    // alunaElement.innerHTML = aluna
    // document.getElementById('lista').appendChild(alunaElement)
}
