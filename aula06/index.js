class Professora {
    constructor(nome, conteudo){
        this.nome = nome
        this.conteudo = conteudo
        this.org = 'PretaLab'
    }
}

class Aluna {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.notas = [8, 9, 8]
    }

    pegarMedia () {
        console.log(this.calcularMedia())
    }

    calcularMedia () {
        let somaNotas = 0 
        this.notas.forEach(nota => {
            somaNotas += nota
        })

        return somaNotas / this.notas.length
    }
}

const aluna = new Aluna('Nath', 32)

aluna.pegarMedia()
