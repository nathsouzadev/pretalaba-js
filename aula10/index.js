const alunas = [
    'Nath',
    'Amanda',
    'Sarah',
    'Vera',
    'Carol',
    'Trindade',
    'Rose'
]

let alunasRemovidas

function listarAlunas(alunasListadas){
    alunasListadas.forEach(aluna => {
        const elementoLista = document.querySelector('#lista')
        const elementoAluna = document.createElement('p')
        elementoAluna.innerHTML = `${aluna}
            <button onclick="removerAluna('${aluna}')">
                Remover aluna
            </button>`
        elementoLista.appendChild(elementoAluna)
    })
}

listarAlunas(alunas)

const removerAluna = (alunaListada) => {
    alert('Removeno aluna...') 

    if(alunasRemovidas) {
        alunasRemovidas = alunasRemovidas.filter(aluna => aluna != alunaListada)
    } else {
        alunasRemovidas = alunas.filter(aluna => aluna != alunaListada)
    }

    document.getElementById('lista').innerHTML = ''
    listarAlunas(alunasRemovidas)
}

function adicionarAluna(){
    const novaAluna = document.getElementById('nova-aluna').value
    document.getElementById('lista').innerHTML = ''

    if(alunasRemovidas){
        alunasRemovidas.push(novaAluna)
        listarAlunas(alunasRemovidas)
    } else {
        alunas.push(novaAluna)
        listarAlunas(alunas)
    }
}