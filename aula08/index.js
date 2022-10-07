function bemVinda () {
    
    if(!document.querySelector('#bemvinda')){
        const mensagem = document.createElement('h1') //<h1></h1>
        mensagem.innerHTML = 'Bem vinda Nath' //<h1>Bem vinda</h1>
        mensagem.id = 'bemvinda' //<h1 id="bemvinda">Bem vinda</h1>
        document.querySelector('#mensagem').appendChild(mensagem)
    }
}

function mudaCor () {
    let corFonte = document.querySelector('#bemvinda').style.color
    console.log(corFonte)
    if (corFonte == '' || corFonte == 'rgb(0, 0, 0)' ) {
        document.querySelector('#bemvinda').style.color = '#A020F0'
    } else {
        document.querySelector('#bemvinda').style.color = '#000000'
    }
    
}