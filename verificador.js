    function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var resposta = document.getElementById('resposta');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                imagem.setAttribute('src', 'foto-bebe-m.png');
            } else if (idade < 21) {
                //jovem
                imagem.setAttribute('src', 'foto-jovem-m.png');
            } else if (idade < 50) {
                //adulto
                imagem.setAttribute('src', 'foto-adulto-m.png');
            } else {
                //idoso
                imagem.setAttribute('src', 'foto-idoso-m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10) {
                //criança
                imagem.setAttribute('src', 'foto-bebe-f.png');
            } else if (idade < 21) {
                //jovem
                imagem.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50) {
                //adulto
                imagem.setAttribute('src', 'foto-adulto-f.png');
            } else {
                //idoso
                imagem.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        resposta.style.textAlign = 'center';
        resposta.innerHTML = `<p.>Detectamos ${genero} com ${idade} anos</p> `;
        resposta.appendChild(imagem);
        

    }
}
