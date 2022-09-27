const alunas = ['Thais', 'Veronica', 'Carolina']

console.log(alunas.length)
console.log('ARRAY ORIGINAL', alunas)

alunas.push('Drika', 'Vera', 'Paula', 'Nadja')

console.log(alunas.length)
console.log('ARRAY MODIFICIADO', alunas)

alunas.pop()
alunas.pop()

console.log(alunas.length)
console.log('REMOVENDO VALORES', alunas)

const linguagens = ['JS', 1, 2, 3, 'HTML', 'CSS']
linguagens.forEach(linguagem => {
    if(isNaN(linguagem)){
        console.log(linguagem)
    }
})

const cursos = ['JS', 'CSS', 'HTML']

const pretaLab = [ alunas, cursos]

const cursosLivres = [ 'MinasProgramam', pretaLab, 'Programaria' ]

console.log(cursosLivres[1][1][2])