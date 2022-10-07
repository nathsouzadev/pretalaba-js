let nome = 'Nath'

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(resposta => resposta.json())
.then(dados => console.log(dados))

console.log(nome)

function qualquer() {
    return 2
}

console.log(qualquer())

const curso = 'PretaLab'

document.getElementById('aula').innerHTML = 'Trabalhando com o DOM no JS'

const novaDiv = document.createElement('div')

novaDiv.innerHTML = 'Div criada com o DOM'

document.getElementById('aula').appendChild(novaDiv)
