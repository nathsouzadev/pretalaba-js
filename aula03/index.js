const alunas = [
    {
        nome: 'Nath',
        nota: 5
    },
    {
        nome: 'Joyce',
        nota: 9
    },
    {
        nome: 'Maria',
        nota: 9
    }
]

alunas.map(aluna => {
    if(aluna.nota >= 7) {
        console.log(aluna.nome + ' está aprovada')
    } else {
        console.log(aluna.nome + ' está reprovada')
    }
})

const aprovadas = alunas.filter(aluna => aluna.nota >= 7)

console.log(aprovadas)
